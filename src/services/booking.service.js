const pool = require("../config/db");
const { generateCode } = require("../utils/generateCode");

exports.createBooking = async (userId, eventId, tickets = 1) => {
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    
    const [events] = await connection.execute(
      "SELECT * FROM events WHERE id = ? FOR UPDATE",
      [eventId]
    );

    if (events.length === 0) {
      throw new Error("Event not found");
    }

    const event = events[0];

    if (event.remaining_tickets < tickets) {
      throw new Error("Not enough tickets available");
    }

   
    await connection.execute(
      "UPDATE events SET remaining_tickets = remaining_tickets - ? WHERE id = ?",
      [tickets, eventId]
    );

    const bookingCode = generateCode();

    
    await connection.execute(
      `INSERT INTO bookings (user_id, event_id, booking_code, tickets_booked)
       VALUES (?, ?, ?, ?)`,
      [userId, eventId, bookingCode, tickets]
    );

    await connection.commit();

    return { bookingCode };

  } catch (err) {
    await connection.rollback();
    throw err;
  } finally {
    connection.release();
  }
};