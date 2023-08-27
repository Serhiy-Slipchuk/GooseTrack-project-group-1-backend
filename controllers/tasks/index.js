const { getTasksController } = require("./getTasksController");
const { addTaskController } = require("./addTaskController");
const { removeTaskController } = require("./removeTaskController");
const { updateTaskController } = require("./updateTaskController");

module.exports = {
    getTasksController,
    addTaskController,
    removeTaskController,
    updateTaskController,
};