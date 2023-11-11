const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifyToken");

const { getReviews, createReview } = require("../controllers/reviews");

router.get("/", getReviews);

router.use(verifyToken);

router.post("/", createReview);

module.exports = router;
