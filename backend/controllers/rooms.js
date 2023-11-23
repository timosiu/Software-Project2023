const rooms = require("../models/rooms");

const getRooms = async (req, res) => {
  try {
    const response = await rooms.findAll();
    if (response) {
      res.status(200).send(response);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Something went wrong" });
  }
};
const getRoomById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const response = await rooms.findRoomById(id);
    if (response.length === 1) {
      res.status(200).send(response[0]);
    }
  } catch (err) {
    res.status(500).send({ message: "Something went wrong" });
  }
};

module.exports = {
  getRooms,
  getRoomById,
};
