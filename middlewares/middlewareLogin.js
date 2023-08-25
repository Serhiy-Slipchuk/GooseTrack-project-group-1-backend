const { loginUserJoiSchema } = require("../models/user");

const middlewareLogin = async (req, res, next) => {
  try {
    await loginUserJoiSchema.validateAsync(req.body);

    next();
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: `Помилка валідації Joi: ${error.message}`,
    });
  }
};

module.exports = { middlewareLogin };
