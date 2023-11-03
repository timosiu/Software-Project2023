const express = require("express");
const users = require("./routes/users");
const locations = require("./routes/locations");
const forum = require("./routes/forum");
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
app.use("/api/locations", locations);
app.use("/api/forum", forum);

app.get("/health", (req, res) => {
  res.send("OK");
});

module.exports = app;
