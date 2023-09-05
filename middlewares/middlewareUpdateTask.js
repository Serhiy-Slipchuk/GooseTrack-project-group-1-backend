const { updateTaskJoiSchema, Task } = require("../models/task");
const { validateDate } = require("../services");

const middlewareUpdateTask = async (req, res, next) => {
  try {
    await updateTaskJoiSchema.validateAsync(req.body);

    const { start, end, date, owner } = req.body;
    const { id } = req.params;

    const task = await Task.findById(id);
    if (!task) {
      res.status(404).json({ status: 404, message: "Not found" });
      return;
    }

    if (task.owner.toString() !== req.user._id.toString()) {
      res
        .status(423)
        .json({
          status: 423,
          message:
            "Locked. You have no necessary permissions to update this task",
        });
      return;
    }

    if (owner) {
      res.status(423).json({
        status: 423,
        message: `Locked. You have no necessary permissions to update task owner`,
      });
      return;
    }

    if (start && end) {
      if (start >= end) {
        res.status(400).json({
          status: 400,
          message: "Start time must be less than end time",
        });
        return;
      }
    }

    if (start && !end) {
      if (start >= task.end) {
        res.status(400).json({
          status: 400,
          message: "Start time must be less than end time",
        });
        return;
      }
    }

    if (!start && end) {
      if (task.start >= end) {
        res.status(400).json({
          status: 400,
          message: "Start time must be less than end time",
        });
        return;
      }
    }

    if (date) {
      if (!validateDate(date)) {
        res.status(400).json({
          status: 400,
          message: "GoIT validation error: /Invalid date",
        });
        return;
      }
    }

    next();
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: `Joi validation error: ${error.message}`,
    });
  }
};

module.exports = { middlewareUpdateTask };
