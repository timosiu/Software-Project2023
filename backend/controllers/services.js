const services = require("../models/services");

const getServices = async (req, res) => {
  try {
    const response = await services.findAll();
    if (response) {
      // examples how to access service images
      let array = JSON.parse(response[1].serviceImages);
      console.log(array[1]);

      res.status(200).send(response);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Something went wrong" });
  }
};

module.exports = {
  getServices,
};
