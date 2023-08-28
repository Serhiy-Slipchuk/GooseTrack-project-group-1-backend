const express = require("express");

const router = express.Router();

const { middlewareAuth, middlewareAddReview } = require("../middlewares");

const { addReviewController, getAllReviewsController } = require("../controllers/reviews");

router.get("/", getAllReviewsController);
router.post("/own", middlewareAuth, middlewareAddReview, addReviewController);

module.exports = router;
