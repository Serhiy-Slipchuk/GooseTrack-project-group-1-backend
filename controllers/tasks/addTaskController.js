const { Task } = require("../../models/task");

const addTaskController = async (req, res) => {
    const { _id: owner } = req.user;

    try {
        const task = await Task.create({...req.body, owner});
    
    res.status(201).json({
        status: 201,
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

module.exports = { addTaskController };