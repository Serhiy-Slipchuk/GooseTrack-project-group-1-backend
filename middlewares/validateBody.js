const AppError = require("../services/appError");

const validateBody = schema => {
    const func = (req, res, next) => {
        const {error} = schema.validate(req.body);
        const { start, end } = req.body;

        if(start >= end) {
          res.status(400).json({
            status: 400, message: "Start time must be less than end time"
          });
          return;
        };

        if(error) {
        next(new AppError(400, error.message))
      };
      next(error);
    }
    return func;
};

module.exports = { validateBody };