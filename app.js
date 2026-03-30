require("dotenv").config();
const express = require("express");

const app = express();


app.use(express.json());


const eventRoutes = require("./src/routes/event.routes");
const bookingRoutes = require("./src/routes/booking.routes");
const userRoutes = require("./src/routes/user.routes");
const attendanceRoutes = require("./src/routes/attendance.routes");


app.use("/api/events", eventRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/users", userRoutes);
app.use("/api/events", attendanceRoutes);



app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    message: "Internal Server Error",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});