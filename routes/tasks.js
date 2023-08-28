const express = require("express");
const router = express.Router();
const { middlewareAuth, validateBody, isValidId } = require("../middlewares");
const { 
  getTasksController,
  addTaskController,
  removeTaskController,
  updateTaskController 
} = require("../controllers/tasks");
const { addTaskJoiSchema } = require("../models/task");

router.get("/", middlewareAuth, getTasksController);
router.post("/", middlewareAuth, validateBody(addTaskJoiSchema), addTaskController);
router.delete("/:id", middlewareAuth, isValidId, removeTaskController);
router.patch("/:id", middlewareAuth, isValidId, validateBody(addTaskJoiSchema), updateTaskController);

module.exports = router;
