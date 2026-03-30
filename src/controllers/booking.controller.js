const bookingService = require("../services/booking.service");

exports.bookTicket = async (req, res) => {
  try {
    const { userId, eventId, tickets } = req.body;

    if (!userId || !eventId || !tickets) {
  return res.status(400).json({ message: "Missing fields" });
}

if (tickets <= 0) {
  return res.status(400).json({ message: "Invalid ticket count" });
}

    const result = await bookingService.createBooking(
      userId,
      eventId,
      tickets
    );

    res.status(201).json({
      message: "Booking successful",
      bookingCode: result.bookingCode,
    });

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};