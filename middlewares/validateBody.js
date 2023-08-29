const AppError = require("../services/appError");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    const { start, end, date } = req.body;

    if (start >= end) {
      res.status(400).json({
        status: 400,
        message: "Start time must be less than end time",
      });
      return;
    }

    const mounth = date.split("-")[1];
    const year = date.split("-")[0];
    if (Number(mounth) > 12 || Number(year) < 2023) {
      res.status(400).json({
        status: 400,
        message: "Invalid date or date format",
      });
      return;
    }

    if (error) {
      next(new AppError(400, error.message));
    }
    next(error);
  };
  return func;
};

module.exports = { validateBody };
