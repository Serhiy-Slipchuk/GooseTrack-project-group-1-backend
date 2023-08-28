const { Review } = require("../../models/review");
const { User } = require("../../models/user")

const getAllReviewsController = async (req, res) => {
    try {
        const reviewsList = await Review.find().populate({ path: 'owner', select: 'name role avatarURL -_id' });
        res.status(200).json({status: 200, message: "Success", reviews: reviewsList});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ status: 500, message: error.message });
    }
}

module.exports = { getAllReviewsController }
