const { updateReviewJoiSchema, Review } = require("../models/review");

const middlewareUpdateReview = async (req, res, next) => {
  if (req.body.owner) {
    res.status(423).json({
      status: 423,
      message: `Locked. You have no necessary permissions to update owner of this review`,
    });
    return;
  }

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
