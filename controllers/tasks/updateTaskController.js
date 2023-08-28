const { Task } = require("../../models/task");

const updateTaskController = async (req, res) => {
    const {id} = req.params;

    try {
        const task = await Task.findByIdAndUpdate(id, req.body, {new: true});

    if(!task) {
      res.status(404).json({ status: 404, message: "Not found" });
      return;
    };

    res.status(200).json({
        status: 200,
        message: "Success",
        task: {
            title: task.title,
            start: task.start,
            end: task.end,
            priority: task.priority,
            date: task.date,
            category: task.category,
        },
    });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};

  module.exports = { updateTaskController };