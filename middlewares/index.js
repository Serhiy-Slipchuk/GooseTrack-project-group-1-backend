const { middlewareRegister } = require("./middlewareRegister");
const { middlewareLogin } = require("./middlewareLogin");
const { middlewareAuth } = require("./middlewareAuth");
const { middlewareUpdateUser } = require("./middlewareUpdateUser");
const { middlewareUploadFile } = require("./middlewareUploadFile");
const { validateBody } = require("./validateBody");
const { isValidId } = require("./isValidId");
const { middlewareAddReview } = require("./middlewareAddReview");
const { middlewareUpdateReview } = require("./middlewareUpdateReview");

module.exports = {
  middlewareRegister,
  middlewareLogin,
  middlewareAuth,
  middlewareUpdateUser,
  middlewareUploadFile,
  validateBody,
  isValidId,
  middlewareAddReview,
  middlewareUpdateReview,
};
