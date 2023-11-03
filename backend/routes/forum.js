const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifyToken");

const {
  getThreads,
  getThreadByID,
  createThread,
  createPost,
} = require("../controllers/forum");

router.get("/", getThreads);
router.get("/:id", getThreadByID);

router.use(verifyToken);

router.post("/", createThread);
router.post("/:id", createPost);

module.exports = router;
