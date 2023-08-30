const { registerUserJoiSchema } = require("../models/user");

const middlewareRegister = async (req, res, next) => {
  try {
    await registerUserJoiSchema.validateAsync(req.body);

    next();
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: `Joi validation error: ${error.message}`,
    });
  }
};

module.exports = { middlewareRegister };
