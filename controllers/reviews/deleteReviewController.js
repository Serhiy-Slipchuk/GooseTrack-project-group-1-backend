const { Review } = require("../../models/review");

const deleteReviewController = async (req, res) => {
  try {
    const { _id, name } = req.user;
    const ownReview = await Review.findOneAndDelete({ owner: { _id } });

    if (!ownReview) {
      res.status(404).json({
        status: 404,
        message: `User ${name} have no any review do delete`,
      });
      return;
    }

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { deleteReviewController };
