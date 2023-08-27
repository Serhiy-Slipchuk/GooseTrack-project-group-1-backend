const express = require("express");

const router = express.Router();

const { middlewareAuth, middlewareAddReview } = require("../middlewares");

const { addReviewController } = require("../controllers/reviews");

router.get("/", (req, res) => {
  res.status(200).json({ message: "Test REVIEWS endpoint" });
});
router.post("/own", middlewareAuth, middlewareAddReview, addReviewController);

module.exports = router;
