const { Task } = require("../../models/task");

const getTasksController = async (req, res) => {
  const { _id: owner, name } = req.user;
  const { mounth } = req.query;
  console.log("mounth", mounth);

  const searchCriteria = mounth ? { owner, mounth } : { owner };
  console.log(searchCriteria);

  try {
    const result = await Task.find(searchCriteria).populate({
      path: "owner",
      select: "name email avatarURL -_id",
    });

    if (result?.length === 0) {
      const message = mounth
        ? `User ${name} have no any task in ${mounth} mounth`
        : `User ${name} have no any task`;
      res.status(404).json({
        status: 404,
        message,
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
