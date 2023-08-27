const { Task } = require("../../models/task");
const controllerWrapper = require("../../helpers/controllerWrapper");

const updateTaskController = async (req, res) => {
    const {id} = req.params;
    const result = await Task.findByIdAndUpdate(id, req.body, {new: true});
    if(!result) {
      throw HttpError(404, 'Not found');
    };
    res.json(result);
  };

  module.exports = {
    updateTaskController: controllerWrapper(updateTaskController)
  };