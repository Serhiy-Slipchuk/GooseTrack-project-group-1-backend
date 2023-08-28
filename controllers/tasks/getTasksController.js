const { Task } = require("../../models/task");

const getTasksController = async (req, res) => {
    const {_id: owner} = req.user;

    try {
        const result = await Task.find({owner}).populate("owner", "email");

    res.status(200).json({
        status: 200,
        message: "Success",
        result
    });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};

module.exports = { getTasksController };