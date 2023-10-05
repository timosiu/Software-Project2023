const express = require("express");
const users = require("./routes/users");
const cors = require("cors");

require("dotenv").config();

const frontend = process.env.FRONTEND || "http://localhost:5173";

const app = express();
app.use(
  cors({
    origin: [frontend],
  })
);
app.use(express.json());

app.use("/api/users", users);

app.get("/health", (req, res) => {
  res.send("OK");
});

module.exports = app;
