const express = require("express");
const router = express.Router();

const { getServices } = require("../controllers/services");

router.get("/", getServices);

module.exports = router;
