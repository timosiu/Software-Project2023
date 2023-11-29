const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifyToken");

const {
  getReservations,
  getReservationsByUserId,
  createReservation,
} = require("../controllers/reservations");

router.get("/", getReservations);

router.use(verifyToken);

router.get("/myreservations", getReservationsByUserId);
router.post("/", createReservation);

module.exports = router;
