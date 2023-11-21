const express = require("express");
const router = express.Router();

const { getActivities } = require("../controllers/activities");

router.get("/", getActivities);

module.exports = router;
