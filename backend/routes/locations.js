const express = require("express");
const router = express.Router();

const { getLocations, getLocationById } = require("../controllers/locations");

router.get("/", getLocations);
router.get("/:id", getLocationById);

module.exports = router;
