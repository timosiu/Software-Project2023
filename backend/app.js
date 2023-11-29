const express = require("express");
const users = require("./routes/users");
const rooms = require("./routes/rooms");
const services = require("./routes/services");
const activities = require("./routes/activities");
const reviews = require("./routes/reviews");
const reservations = require("./routes/reservations");
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
app.use("/api/rooms", rooms);
app.use("/api/services", services);
app.use("/api/activities", activities);
app.use("/api/reviews", reviews);
app.use("/api/reservations", reservations);

app.get("/health", (req, res) => {
  res.send("OK");
});

module.exports = app;
