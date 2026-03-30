const pool = require("../config/db");

exports.getUserBookings = async (req, res) => {
    try{
  const userId = req.params.id;

  const [bookings] = await pool.execute(
    `SELECT b.*, e.title, e.event_date
     FROM bookings b
     JOIN events e ON b.event_id = e.id
     WHERE b.user_id = ?`,
    [userId]
  );

  res.json(bookings);
}catch (err) {
    res.status(500).json({ message: err.message });
  }
};