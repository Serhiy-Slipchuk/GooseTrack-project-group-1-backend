const { Task } = require("../../models/task");
const controllerWrapper = require("../../helpers/controllerWrapper");
const AppError = require("../../services/appError");

const removeTaskController = async (req, res) => {
    const {id} = req.params;

    const result = await Task.findByIdAndRemove(id);
    if(!result) {
        throw AppError(404, "Not found");
    };

    res.status(200).json({message: "task deleted"});
};

module.exports = {
    removeTaskController: controllerWrapper(removeTaskController)
};