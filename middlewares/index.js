const { middlewareRegister } = require("./middlewareRegister");
const { middlewareLogin } = require("./middlewareLogin");
const { middlewareAuth } = require("./middlewareAuth");
const { middlewareUpdateUser } = require("./middlewareUpdateUser");
const { middlewareUploadFile } = require("./middlewareUploadFile");

module.exports = {
  middlewareRegister,
  middlewareLogin,
  middlewareAuth,
  middlewareUpdateUser,
  middlewareUploadFile,
};
