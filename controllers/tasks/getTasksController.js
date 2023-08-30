const { Task } = require("../../models/task");

const getTasksController = async (req, res) => {
  const { _id: owner, name } = req.user;
  const { month } = req.query;

  const searchCriteria = month ? { owner, date: { $regex: month } } : { owner };

  try {
    const result = await Task.find(searchCriteria).populate({
      path: "owner",
      select: "name email avatarURL -_id",
    });

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
