const { model, Schema } = require("mongoose");
const Joi = require("joi");

// ------------------------------------ MONGOOSE SCHEMA --------------------------------------

const reviewSchema = new Schema(
    {
        grade: {
            type: Number,
            required: true,
            default: 5,
        },
        description: {
            type: String,
            required: true,
        },
    },
    { versionKey: false, timestamps: true }
);

const Review = model("review", reviewSchema);

// -------------------------------------- JOI SCHEMA -------------------------------------------

const addReviewJoiSchema = Joi.object({
    grade: Joi.number().min(1).max(5).required(),
    description: Joi.string().max(300).required(),
});

module.exports = {
    Review,
    addReviewJoiSchema,
};