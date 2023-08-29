const { addTaskJoiSchema } = require("../models/task");
const { validateDate } = require("../services");

const middlewareAddTask = async (req, res, next) => {
  try {
    await addTaskJoiSchema.validateAsync(req.body);

    const { start, end, date } = req.body;

    if (start >= end) {
      res.status(400).json({
        status: 400,
        message: "Start time must be less than end time",
      });
      return;
    }

    if (!validateDate(date)) {
      res.status(400).json({
        status: 400,
        message: "GoIT validation error: /Invalid date",
      });
      return;
    }

    next();
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: `Joi validation error: ${error.message}`,
    });
  }
};

module.exports = { middlewareAddTask };
