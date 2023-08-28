const express = require("express");

const router = express.Router();

const {
  middlewareAuth,
  middlewareAddReview,
  middlewareUpdateReview,
} = require("../middlewares");

const {
  addReviewController,
  getAllReviewsController,
  getReviewController,
  deleteReviewController,
  updateReviewController,
} = require("../controllers/reviews");

router.get("/", getAllReviewsController);
router.get("/own", middlewareAuth, getReviewController);
router.post("/own", middlewareAuth, middlewareAddReview, addReviewController);
router.patch(
  "/own",
  middlewareAuth,
  middlewareUpdateReview,
  updateReviewController
);
router.delete("/own", middlewareAuth, deleteReviewController);

module.exports = router;
