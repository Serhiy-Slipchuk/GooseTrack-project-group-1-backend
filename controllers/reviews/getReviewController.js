const { Review } = require("../../models/review");

const getReviewController = async (req, res) => {
  try {
    const { _id, name } = req.user;
    const ownReview = await Review.findOne({ owner: { _id } }).populate({
      path: "owner",
      select: "name email role avatarURL -_id",
    });

    if (!ownReview) {
      res.status(404).json({
        status: 404,
        message: `User ${name} have no any review`,
      });
      return;
    }

    res.status(200).json({
      status: 200,
      message: "Success",
      review: ownReview,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getReviewController };
