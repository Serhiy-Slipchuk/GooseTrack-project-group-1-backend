const { reviewJoiSchema, Review } = require("../models/review");

const middlewareAddReview = async (req, res, next) => {
  try {
    const userReviews = await Review.find({ owner: req.user._id });

    if (userReviews?.length >= 1) {
      res.status(403).json({
        status: 403,
        message: "Forbidden. You can not leave more than 1 review",
      });
      return;
    }

    await reviewJoiSchema.validateAsync(req.body);

    next();
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: `Помилка валідації Joi: ${error.message}`,
    });
  }
};

module.exports = { middlewareAddReview };
