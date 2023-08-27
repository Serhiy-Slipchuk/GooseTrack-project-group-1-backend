const { model, Schema } = require("mongoose");
const Joi = require("joi");

const dateRegexp = /^\d{4}-\d{2}-\d{2}$/;

// ------------------------------------ MONGOOSE SCHEMA --------------------------------------

const taskSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Task is required"],
        },
        start: {
            type: String,
            required: true,
        },
        end: {
            type: String,
            required: true,
        },
        priority: {
            type: String,
            required: true,
            enum: ["low", "medium", "high"],
            default: "low",
        },
        date: {
            type: String,
            match: dateRegexp,
            required: true,
        },
        category: {
            type: String,
            required: true,
            enum: ["to-do", "in-progress", "done"],
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "user",
          }, 
    },
    { versionKey: false, timestamps: true }
);

const Task = model("task", taskSchema);

// -------------------------------------- JOI SCHEMA -------------------------------------------

const addTaskJoiSchema = Joi.object({
    title: Joi.string().max(250).required(),
    start: Joi.string().required(),
    end: Joi.string().required(),
});

module.exports = {
    Task,
    addTaskJoiSchema,
};