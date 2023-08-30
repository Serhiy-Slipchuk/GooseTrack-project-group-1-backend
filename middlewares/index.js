const { middlewareRegister } = require("./middlewareRegister");
const { middlewareLogin } = require("./middlewareLogin");
const { middlewareAuth } = require("./middlewareAuth");
const { middlewareUpdateUser } = require("./middlewareUpdateUser");
const { middlewareUploadFile } = require("./middlewareUploadFile");
const { middlewareAddReview } = require("./middlewareAddReview");
const { middlewareUpdateReview } = require("./middlewareUpdateReview");
const { middlewareAddTask } = require("./middlewareAddTask");
const { middlewareUpdateTask } = require("./middlewareUpdateTask");

const { isValidId } = require("./isValidId");

module.exports = {
  middlewareRegister,
  middlewareLogin,
  middlewareAuth,
  middlewareUpdateUser,
  middlewareUploadFile,
  middlewareAddReview,
  middlewareUpdateReview,
  middlewareAddTask,
  middlewareUpdateTask,
  isValidId,
};
