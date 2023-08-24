const { model, Schema } = require("mongoose");
const Joi = require("joi");

// ------------------------------------------------ MONGOOSE SCHEMA ------------------------------------------------

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Enter user name"],
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    avatarURL: {
      type: String,
      default:
        "https://goosetrack-18hi.onrender.com/images/avatars/default.svg",
    },
    phone: {
      type: String,
      default: "",
    },
    skype: {
      type: String,
      default: "",
    },
    birthday: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    theme: {
      type: String,
      enum: ["light", "dark"],
      default: "light",
    },
    token: String,
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

const User = model("user", userSchema);

// ------------------------------------------------ JOI SCHEMA ------------------------------------------------
const registerUserJoiSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
});

module.exports = {
  User,
  registerUserJoiSchema,
};
