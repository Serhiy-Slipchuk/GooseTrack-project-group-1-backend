const { Task } = require("../../models/task");
const AppError = require("../../services/appError");

const removeTaskController = async (req, res) => {
    const {id} = req.params;

    try {
        const result = await Task.findByIdAndRemove(id);

    if(!result) {
        throw AppError(404, "Not found");
    };

    res.status(200).json({message: "Task deleted"});
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};

module.exports = { removeTaskController };