const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../../models/user");

const registerController = async (req, res) => {
  try {
    const { password } = req.body;

    const hashPassword = await bcrypt.hash(password, 9);

    const newUser = await User.create({
      ...req.body,
      password: hashPassword,
    });

    //   ------------------------------------- CREATE TOKEN ----------------------------------
    const payload = {
      id: newUser._id,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    const newAuthUser = await User.findByIdAndUpdate(newUser._id, { token: token }, {new: true});
    //   -------------------------------------------------------------------------------

    res.status(201).json({
      status: 201,
      message: "Success",
      user: {
        name: newAuthUser.name,
        email: newAuthUser.email,
        token: newAuthUser.token
      },
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).json({
        status: 409,
        message: `Email ${error.keyValue.email} is in use`,
      });
      return;
    }
    res.status(400).json({
      status: 400,
      message: `MongoDB validation error: //${error.message}//`,
    });
  }
};

module.exports = { registerController };
