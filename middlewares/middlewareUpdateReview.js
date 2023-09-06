const { updateReviewJoiSchema, Review } = require("../models/review");

const middlewareUpdateReview = async (req, res, next) => {

  try {
    await updateReviewJoiSchema.validateAsync(req.body);

    next();
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: `Joi validation error: ${error.message}`,
    });
  }
};

module.exports = { middlewareUpdateReview };
