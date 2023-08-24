const express = require("express");
const logger = require("morgan");

require("colors").enable();
require("dotenv").config();

const usersRouter = require("./routes/users");
const tasksRouter = require("./routes/tasks");
const reviewsRouter = require("./routes/reviews");

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

// =============================================== MIDDLEWARES =========================================
app.use(logger(formatsLogger));
app.use(express.json());
app.use(express.static("public"));

app.use("/api/v1/reviews", reviewsRouter);
app.use("/api/v1/tasks", tasksRouter);
app.use("/api/v1", usersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = app;
