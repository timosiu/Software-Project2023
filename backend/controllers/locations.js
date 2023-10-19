const locations = require("../models/locations");

const getLocations = async (req, res) => {
  try {
    const response = await locations.findAll();
    if (response) {
      // example how to access certain comforts value
      let test = response[0].comforts;
      let obj = JSON.parse(test);
      console.log(obj.bathtub);

      res.send(response);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Something went wrong" });
  }
};

module.exports = {
  getLocations,
};
