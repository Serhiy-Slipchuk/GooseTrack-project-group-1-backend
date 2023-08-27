const express = require("express");
const router = express.Router();
const { middlewareAuth } = require("../middlewares");
const { 
  getTasksController,
  addTaskController } = require("../controllers");


// router.get("/", (req, res) => {
//   res.status(200).json({ message: "Test TASK endpoint" });
// });

router.get("/", middlewareAuth, getTasksController);
router.post("/", middlewareAuth, addTaskController);

module.exports = router;
