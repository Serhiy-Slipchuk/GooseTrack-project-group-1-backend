const express = require("express");
const router = express.Router();
const { middlewareAuth, validateBody } = require("../middlewares");
const { 
  getTasksController,
  addTaskController,
  removeTaskController,
  updateTaskController 
} = require("../controllers/tasks");
const { addTaskJoiSchema } = require("../models/task");

router.get("/", middlewareAuth, getTasksController);
router.post("/", middlewareAuth, validateBody(addTaskJoiSchema), addTaskController);
router.delete("/:id", middlewareAuth, removeTaskController);
router.patch("/:id", middlewareAuth, updateTaskController);

module.exports = router;
