const Joi = require("joi");
const reviews = require("../models/reviews");

const getReviews = async (req, res) => {
  try {
    const response = await reviews.findAllReviews();
    if (response) {
      res.status(200).send(response);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Something went wrong" });
  }
};

const createReview = async (req, res) => {
  const schema = Joi.object({
    message: Joi.string().min(3).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const review = {
    user_id: req.userData.userId,
    message: req.body.message,
  };

  try {
    const response = await reviews.addReview(review);
    if (response) {
      review.id = response.insertId;
      res.status(201).send(review);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Something went wrong" });
  }
};

module.exports = {
  getReviews,
  createReview,
};
