const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../../models/user");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    //   ------------------------------------- CHECK USER ----------------------------------

    if (!user) {
      res
        .status(400)
        .json({ status: 400, message: "Email or password is wrong" });
      return;
    }

    //   ------------------------------------- CHECK PASSWORD --------------------------------
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res
        .status(400)
        .json({ status: 400, message: "Email or password is wrong" });
      return;
    }

    //   ------------------------------------- CREATE TOKEN ----------------------------------
    const payload = {
      id: user._id,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    await User.findByIdAndUpdate(user._id, { token: token });

    //   ------------------------------------- RESPONSE -------------------------------------
    res.status(200).json({
      status: 200,
      message: "Success",
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ status: 400, message: "Email or password is wrong" });
  }
};

module.exports = { loginController };
