const { model, Schema } = require("mongoose");
const Joi = require("joi");

const phoneRegexp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/

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
  },
  { versionKey: false, timestamps: true }
);

const User = model('users', userSchema);

// ------------------------------------------------ JOI SCHEMAS ------------------------------------------------
const registerUserJoiSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(30).required(),
});

const loginUserJoiSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(30).required(),
});

const updateUserJoiSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  email: Joi.string().email(),
  avatarURL: Joi.string().min(10),
  phone: Joi.string().min(13).max(20).pattern(phoneRegexp),
  skype: Joi.string().min(3),
  birthday: Joi.date().iso(),
  role: Joi.string().valid('admin', 'user'),
  theme: Joi.string().valid('light', 'dark'),
});

module.exports = {
  User,
  registerUserJoiSchema,
  loginUserJoiSchema,
  updateUserJoiSchema
};
