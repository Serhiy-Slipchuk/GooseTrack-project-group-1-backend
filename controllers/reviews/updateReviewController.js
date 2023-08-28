const { Review } = require("../../models/review");

const updateReviewController = async (req, res) => {
  try {
    const { _id, name } = req.user;
    const updatedReview = await Review.findOneAndUpdate(
      { owner: { _id } },
      req.body,
      { new: true }
    ).populate({
      path: "owner",
      select: "name role avatarURL -_id",
    });

    if (!updatedReview) {
      res.status(404).json({
        status: 404,
        message: `User ${name} have no any review`,
      });
      return;
    }

    res.status(200).json({
      status: 200,
      message: "Success",
      review: updatedReview,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { updateReviewController };
