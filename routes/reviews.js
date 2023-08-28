const express = require("express");

const router = express.Router();

const { middlewareAuth, middlewareAddReview } = require("../middlewares");

const {
  addReviewController,
  getAllReviewsController,
  getReviewController,
  deleteReviewController,
} = require("../controllers/reviews");

router.get("/", getAllReviewsController);
router.get("/own", middlewareAuth, getReviewController);
router.post("/own", middlewareAuth, middlewareAddReview, addReviewController);
router.delete("/own", middlewareAuth, deleteReviewController);

module.exports = router;
