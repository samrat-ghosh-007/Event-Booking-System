const express = require("express");
const router = express.Router();

const { bookTicket } = require("../controllers/booking.controller");

router.post("/", bookTicket);

module.exports = router;