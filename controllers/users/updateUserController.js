const { User } = require("../../models/user");

const updateUserController = async (req, res) => {
  const { _id } = req.user;

  if (req.body.role && req.user.role !== "admin") {
    res.status(423).json({
      status: 423,
      message: `Locked. You have no necessary permissions to update user role`,
    });
    return;
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      { ...req.body },
      { new: true }
    );
    await updatedUser.save();

    res.status(200).json({
      status: 200,
      message: "Success. User update controller",
      user: {
        name: updatedUser.name,
        email: updatedUser.email,
        avatarURL: updatedUser.avatarURL,
        phone: updatedUser.phone,
        skype: updatedUser.skype,
        birthdate: updatedUser.birthday,
        role: updatedUser.role,
        theme: updatedUser.theme,
        createdAt: updatedUser.createdAt,
        updatedAt: updatedUser.updatedAt,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: `User update controller:${error.message}`,
    });
  }
};

module.exports = { updateUserController };
