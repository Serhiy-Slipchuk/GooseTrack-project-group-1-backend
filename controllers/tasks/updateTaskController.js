const { Task } = require("../../models/task");

const updateTaskController = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json({
      status: 200,
      message: "Success",
      task,
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

module.exports = { updateTaskController };
