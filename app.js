const express = require("express");
const logger = require("morgan");

require("colors").enable();
require("dotenv").config();

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

// =============================================== MIDDLEWARES =========================================
app.use(logger(formatsLogger));
app.use(express.json());
app.use(express.static("public"));

app.get("/api/v1", (req, res) => {
    res.status(200).json({message: "Test endpoint"})
});
app.use((req, res) => {
    res.status(404).json({message: "Not found"})
})
app.use((err, req, res, next) => {
   res.status(err.status || 500).json({message: err.message})
})

module.exports = app;