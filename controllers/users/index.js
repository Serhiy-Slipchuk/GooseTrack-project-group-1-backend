const { registerController } = require("./registerController");
const { loginController } = require("./loginController");
const { logoutController } = require("./logoutController");
const { currentUserController } = require("./currentUserController");

module.exports = {
  registerController,
  loginController,
  logoutController,
  currentUserController,
};
