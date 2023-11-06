const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifyToken");

const {
  loginUser,
  signUpUser,
  editImage,
  getProfile,
} = require("../controllers/users");

router.post("/signup", signUpUser);
router.post("/login", loginUser);

router.use(verifyToken);

router.get("/", getProfile);
router.put("/edit-image", editImage);

module.exports = router;
