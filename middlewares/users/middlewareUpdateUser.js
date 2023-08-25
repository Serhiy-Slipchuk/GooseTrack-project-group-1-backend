const { updateUserJoiSchema } = require("../../models/user");

const middlewareUpdateUser = async (req, res, next) => {
  try {
    await updateUserJoiSchema.validateAsync(req.body);

    next();
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: `Помилка валідації Joi: ${error.message}`,
    });
  }
};

module.exports = { middlewareUpdateUser };