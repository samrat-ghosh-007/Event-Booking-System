const pool = require("../config/db");

exports.markAttendance = async (req, res) => {
    try{
  const eventId = req.params.eventId;
  const { bookingCode } = req.body;

  if (!bookingCode) {
  return res.status(400).json({ message: "bookingCode is required" });
}

  
  if (!bookingCode) {
    return res.status(400).json({
      message: "bookingCode is required",
    });
  }

  const [booking] = await pool.execute(
    "SELECT * FROM bookings WHERE booking_code = ? AND event_id = ?",
    [bookingCode, eventId]
  );

  if (booking.length === 0) {
    return res.status(404).json({ message: "Invalid booking code" });
  }

  await pool.execute(
    "INSERT INTO attendance (booking_code) VALUES (?)",
    [bookingCode]
  );

  res.json({
    message: "Attendance marked",
    ticketsBooked: booking[0].tickets_booked,
  });
}catch (err) {
    res.status(500).json({ message: err.message });
  }
};