const AppError = require("../services/appError");

const validateBody = schema => {
    const func = (req, res, next) => {
        const {error} = schema.validate(req.body);

        if(error) {
        next(new AppError(400, error.message))
      };
      next(error);
    }
    return func;
};

module.exports = { validateBody };