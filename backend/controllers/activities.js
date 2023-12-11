const activities = require("../models/activities");

const getActivities = async (req, res) => {
  try {
    const response = await activities.findAll();
    if (response) {
      res.status(200).send(response);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Something went wrong" });
  }
};

module.exports = {
  getActivities,
};
