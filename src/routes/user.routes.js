const express = require("express");
const router = express.Router();

const { getUserBookings } = require("../controllers/user.controller");

router.get("/:id/bookings", getUserBookings);

module.exports = router;