const { Review } = require("../../models/review");

const addReviewController = async (req, res) => {
  const { _id: owner } = req.user;
  try {
    const newReview = await Review.create({ ...req.body, owner });

    res.status(201).json({
      status: 201,
      message: "Success",
      review: newReview,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ status: 400, message: error.message });
  }
};

module.exports = { addReviewController };
