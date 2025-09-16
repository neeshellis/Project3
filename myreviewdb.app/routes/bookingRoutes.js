const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// matches GET requests sent to /api/users
// (the prefix from server.js)

router.get('/', (req, res) => {
Controllers.bookingController.getBookings(res);
})

// matches POST requests sent to /api/bookings/create
router.post('/create', (req, res) => {
Controllers.bookingController.createBooking(req.body,
res)
})

router.put('/:id', (req, res) => {
Controllers.bookingController.updateBooking(req, res)
})

router.delete('/:id', (req, res) => {
Controllers.bookingController.deleteBooking(req, res)
})

Controllers.initialController.storeBooking()
module.exports = router;