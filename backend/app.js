const express = require("express");
const users = require("./routes/users");
const services = require("./routes/services");
const reviews = require("./routes/reviews");
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
app.use("/api/services", services);
app.use("/api/reviews", reviews);

app.get("/health", (req, res) => {
  res.send("OK");
});

module.exports = app;
