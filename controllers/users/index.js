const { registerController } = require("./registerController");
const { loginController } = require("./loginController");
const { logoutController } = require("./logoutController");
const { currentUserController } = require("./currentUserController");
const { updateUserController } = require("./updateUserController");


module.exports = {
  registerController,
  loginController,
  logoutController,
  currentUserController,
  updateUserController
};
