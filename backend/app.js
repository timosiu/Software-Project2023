const express = require("express");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);
app.use(express.json());

app.get("/health", (req, res) => {
  res.send("OK");
});

module.exports = app;
