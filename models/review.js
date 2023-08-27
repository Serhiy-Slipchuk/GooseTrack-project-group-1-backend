const { model, Schema } = require("mongoose");
const Joi = require("joi");

// ------------------------------------ MONGOOSE SCHEMA --------------------------------------

const reviewSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { versionKey: false, timestamps: true }
);

const Review = model("review", reviewSchema);

// -------------------------------------- JOI SCHEMA -------------------------------------------

const addReviewJoiSchema = Joi.object({
  content: Joi.string().min(10).max(300).required(),
  rating: Joi.number().valid(1, 2, 3, 4, 5).required(),
});

module.exports = {
  Review,
  addReviewJoiSchema,
};
