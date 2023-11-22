const activities = require("../models/activities");

const getActivities = async (req, res) => {
  try {
    const response = await activities.findAll();
    if (response) {
      // examples how to access service images
      let array = JSON.parse(response[1].activityImages);
      console.log(array[0]);

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
