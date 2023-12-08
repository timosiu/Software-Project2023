const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifyToken");

const { getReviews, createReview } = require("../controllers/reviews");

router.get("/:id", getReviews);

router.use(verifyToken);

router.post("/:id", createReview);

module.exports = router;
