const { Task } = require("../../models/task");

const removeTaskController = async (req, res) => {
  const { id } = req.params;

  try {
    const currentTask = await Task.findById(id);

    if (!currentTask) {
      res.status(404).json({ status: 404, message: "Not found" });
      return;
    }

    if (currentTask.owner.toString() !== req.user._id.toString()) {
      res.status(423).json({ status: 423, message: "Locked. You have no necessary permissions to remove this task" });
      return;
    }
    await Task.findByIdAndDelete(id);

    res.status(200).json({ status: 200, message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

module.exports = { removeTaskController };
