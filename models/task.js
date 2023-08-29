const { model, Schema } = require("mongoose");
const Joi = require("joi");

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
    // month: {
    //   type: String,
    //   enum: [
    //     "01",
    //     "02",
    //     "03",
    //     "04",
    //     "05",
    //     "06",
    //     "07",
    //     "08",
    //     "09",
    //     "10",
    //     "11",
    //     "12",
    //   ],
    // },
    // year: {
    //   type: String,
    // },
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
  start: Joi.string().pattern(timeRegexp).required(),
  end: Joi.string().pattern(timeRegexp).required(),
  priority: Joi.string().valid("low", "medium", "high").required(),
  date: Joi.date().iso().min('2023-01-01').required(),
  category: Joi.string().valid("to-do", "in-progress", "done").required(),
});

module.exports = {
  Task,
  addTaskJoiSchema,
};
