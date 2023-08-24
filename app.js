const express = require("express");
const logger = require("morgan");
const cors = require("cors");

require("colors").enable();
require("dotenv").config();

const usersRouter = require("./routes/users");
const tasksRouter = require("./routes/tasks");
const reviewsRouter = require("./routes/reviews");

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

// =============================================== MIDDLEWARES =========================================
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// ================================================= ROUTES =========================================

app.use("/api/v1/reviews", reviewsRouter);
app.use("/api/v1/tasks", tasksRouter);
app.use("/api/v1", usersRouter);

// ================================================= SWAGGER =========================================

const swaggerUi = require("swagger-ui-express");

const swaggerDocument = require("./swagger.json")

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// ================================================= ERROR CATCHERS =========================================

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = app;
