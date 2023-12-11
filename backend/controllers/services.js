const services = require("../models/services");

const getServices = async (req, res) => {
  try {
    const response = await services.findAll();
    if (response) {
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
