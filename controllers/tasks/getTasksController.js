const { Task } = require("../../models/task");
const controllerWrapper = require("../../helpers/controllerWrapper");


const getTasksController = async (req, res) => {
    const {_id: owner} = req.user;

    const result = await Task.find({owner}).populate("owner", "email");
    res.json(result);
};

module.exports = { 
    getTasksController: controllerWrapper(getTasksController)
};