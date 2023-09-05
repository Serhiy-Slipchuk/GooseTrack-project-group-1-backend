const { model, Schema } = require("mongoose");
const Joi = require("joi");
const { validateJoiStartEndTime } = require("../services")

const dateRegexp = /^\d{4}-\d{2}-\d{2}$/;
const timeRegexp = /^\d{2}:\d{2}$/;

// ------------------------------------ MONGOOSE SCHEMA --------------------------------------

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Task is required"],
    },
    start: {
      type: String,
      match: timeRegexp,
      required: true,
    },
    end: {
      type: String,
      match: timeRegexp,
      required: true,
      validate: {
        validator: function (value) {
          return value >= this.start;
        },
        message: "START TIME must be less than END TIME!",
      },
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
      ref: "users",
    },
  },
  { versionKey: false, timestamps: true }
);

const Task = model("task", taskSchema);

// -------------------------------------- JOI SCHEMA -------------------------------------------

const addTaskJoiSchema = Joi.object({
  title: Joi.string().max(250).required(),
  start: Joi.string().pattern(timeRegexp).required().empty(false).messages({
    "string.base": "The start time must be a string.",
    "any.required": "The start time field is required.",
    "string.empty": "The start time must not be empty.",
    "string.pattern.base": "The start time must be in format hh:mm (example: 12:50)"
  }),
  end: Joi.string().pattern(timeRegexp).required().empty(false).messages({
    "string.base": "The end time must be a string.",
    "any.required": "The end time field is required.",
    "string.empty": "The end time must not be empty.",
    "string.pattern.base": "The end time must be in format hh:mm (example: 12:50)"
  }),
  priority: Joi.string().valid("low", "medium", "high").required(),
  date: Joi.date().iso().min("2023-01-01").required(),
  category: Joi.string().valid("to-do", "in-progress", "done").required(),
}).custom(validateJoiStartEndTime).messages({
  "any.invalid": "Start time must be less than end time"
});

const updateTaskJoiSchema = Joi.object({
  title: Joi.string().max(250),
  start: Joi.string().pattern(timeRegexp).empty(false).messages({
    "string.base": "The start time must be a string.",
    "string.empty": "The start time must not be empty.",
    "string.pattern.base": "The start time must be in format hh:mm (example: 12:50)"
  }),
  end: Joi.string().pattern(timeRegexp).empty(false).messages({
    "string.base": "The end time must be a string.",
    "string.empty": "The end time must not be empty.",
    "string.pattern.base": "The end time must be in format hh:mm (example: 12:50)"
  }),
  priority: Joi.string().valid("low", "medium", "high"),
  date: Joi.date().iso().min("2023-01-01"),
  category: Joi.string().valid("to-do", "in-progress", "done"),
});

module.exports = {
  Task,
  addTaskJoiSchema,
  updateTaskJoiSchema,
};
