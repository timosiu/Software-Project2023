const Joi = require("joi");
const reservations = require("../models/reservations");

const getReservations = async (req, res) => {
  try {
    const response = await reservations.findAllReservations();
    if (response) {
      res.status(200).send(response);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Something went wrong" });
  }
};

const getReservationsByUserId = async (req, res) => {
  try {
    const userId = req.userData.userId;
    const response = await reservations.findReservationsByUserId(userId);
    if (response) {
      res.send(response);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Something went wrong" });
  }
};

const createReservation = async (req, res) => {
  const schema = Joi.object({
    roomId: Joi.required(),
    totalCost: Joi.number().positive().required(),
    numberOfPeople: Joi.number().positive().required(),
    startDate: Joi.string().min(3).required(),
    endDate: Joi.string().min(3).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const reservation = {
    user_id: req.userData.userId,
    room_id: req.body.roomId,
    price_total: req.body.totalCost,
    people_amount: req.body.numberOfPeople,
    start_date: req.body.startDate,
    end_date: req.body.endDate,
  };

  try {
    const result = await reservations.findByReservation(reservation);
    if (result.length > 0) {
      res
        .status(400)
        .send({ message: "Reservation is in the database already" });
      return;
    }
    const response = await reservations.addReservation(reservation);
    if (response) {
      reservation.id = response.insertId;
      res.status(201).send(reservation);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Something went wrong" });
  }
};

module.exports = {
  getReservations,
  getReservationsByUserId,
  createReservation,
};
