const { middlewareRegister } = require("./middlewareRegister");
const { middlewareLogin } = require("./middlewareLogin");
const { middlewareAuth } = require("./middlewareAuth");
const { middlewareUpdateUser } = require("./middlewareUpdateUser");

module.exports = {
  middlewareRegister,
  middlewareLogin,
  middlewareAuth,
  middlewareUpdateUser,
};
