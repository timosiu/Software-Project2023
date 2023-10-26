const locations = require("../models/locations");

const getLocations = async (req, res) => {
  try {
    const response = await locations.findAll();
    if (response) {
      // examples how to access certain comforts values and images
      let obj = JSON.parse(response[0].comforts);
      let array = JSON.parse(response[1].locationImages);
      console.log(obj.bathtub);
      console.log(array[1]);

      res.status(200).send(response);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Something went wrong" });
  }
};

const getLocationById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const response = await locations.findLocationById(id);
    if (response.length === 1) {
      res.status(200).send(response[0]);
    }
  } catch (err) {
    res.status(500).send({ message: "Something went wrong" });
  }
};

module.exports = {
  getLocations,
  getLocationById,
};
