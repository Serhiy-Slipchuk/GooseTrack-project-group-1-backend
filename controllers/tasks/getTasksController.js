const { Task } = require("../../models/task");

const getTasksController = async (req, res) => {
  const { _id: owner, name } = req.user;

  try {
    const result = await Task.find({ owner }).populate({
      path: "owner",
      select: "name email avatarURL -_id",
    });

    if (result?.length === 0) {
      res.status(404).json({
        status: 404,
        message: `User ${name} have no any task`,
      });
      return;
    }

    res.status(200).json({
      status: 200,
      message: "Success",
      tasks: result,
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

module.exports = { getTasksController };
