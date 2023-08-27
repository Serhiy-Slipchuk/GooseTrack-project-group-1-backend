const express = require("express");
const router = express.Router();
const { middlewareAuth } = require("../middlewares");
const { 
  getTasksController,
  addTaskController,
  removeTaskController,
  updateTaskController } = require("../controllers/tasks");


// router.get("/", (req, res) => {
//   res.status(200).json({ message: "Test TASK endpoint" });
// });

router.get("/", middlewareAuth, getTasksController);
router.post("/", middlewareAuth, addTaskController);
router.delete("/:id", middlewareAuth, removeTaskController);
router.patch("/:id", middlewareAuth, updateTaskController);

module.exports = router;
