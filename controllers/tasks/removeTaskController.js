const { Task } = require("../../models/task");

const removeTaskController = async (req, res) => {
    const {id} = req.params;

    try {
        const result = await Task.findByIdAndRemove(id);

    if(!result) {
        res.status(401).json({ status: 401, message: "Not authorized" });
        return;
    };

    res.status(200).json({message: "Task deleted"});
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};

module.exports = { removeTaskController };