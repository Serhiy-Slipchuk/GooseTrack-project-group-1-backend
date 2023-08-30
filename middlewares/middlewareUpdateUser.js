const { updateUserJoiSchema } = require("../models/user");

const middlewareUpdateUser = async (req, res, next) => {
  if (req.body.role && req.user.role !== "admin") {
    res.status(423).json({
      status: 423,
      message: `Locked. You have no necessary permissions to update user role`,
    });
    return;
  }

  try {
    await updateUserJoiSchema.validateAsync(req.body);

    next();
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: `Joi validation error: ${error.message}`,
    });
  }
};

module.exports = { middlewareUpdateUser };
