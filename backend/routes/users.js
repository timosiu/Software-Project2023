const express = require("express");
const router = express.Router();

const { loginUser, signUpUser } = require("../controllers/users");

router.post("/signup", signUpUser);
router.post("/login", loginUser);

module.exports = router;
