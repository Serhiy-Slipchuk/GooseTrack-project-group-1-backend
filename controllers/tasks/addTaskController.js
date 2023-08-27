const { Task } = require("../../models/task");
const controllerWrapper = require("../../helpers/controllerWrapper")

const addTaskController = async (req, res) => {
    const {_id: owner} = req.user;
    console.log(req)
    const result = await Task.create({...req.body, owner});
    console.log(req)
    res.status(201).json(result);
};

module.exports = { 
    addTaskController: controllerWrapper(addTaskController) };