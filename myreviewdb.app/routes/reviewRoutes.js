const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// matches GET requests sent to /api/users
// (the prefix from server.js)

router.get('/', (req, res) => {
Controllers.reviewController.getReviews(res);
})

// matches POST requests sent to /api/reviews/create
router.post('/create', (req, res) => {
Controllers.reviewController.createReview(req.body,
res)
})

router.put('/:id', (req, res) => {
Controllers.reviewController.updateReview(req, res)
})

router.delete('/:id', (req, res) => {
Controllers.reviewController.deleteReview(req, res)
})

Controllers.initialController.storeReview()

module.exports = router;