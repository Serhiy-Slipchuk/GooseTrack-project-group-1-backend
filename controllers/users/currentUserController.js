const currentUserController = async (req, res) => {
  res.status(200).json({ status: 200, message: "Success", user: req.user });
};

module.exports = { currentUserController };
