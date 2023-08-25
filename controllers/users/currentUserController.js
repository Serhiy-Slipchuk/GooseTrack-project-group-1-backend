const { User } = require("../../models/user");

const currentUserController = async (req, res) => {
  const { _id } = req.user;

  try {
    const user = await User.findById(_id);

    if (!user) {
      res.status(401).json({ status: 401, message: "Not authorized" });
      return;
    }

    res.status(200).json({
      status: 200,
      message: "Success",
      user: {
        name: user.name,
        email: user.email,
        avatarURL: user.avatarURL,
        phone: user.phone,
        skype: user.skype,
        birthdate: user.birthday,
        role: user.role,
        theme: user.theme,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

module.exports = { currentUserController };
