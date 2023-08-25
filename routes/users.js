const express = require("express");
const router = express.Router();

const {
  middlewareRegister,
  middlewareLogin,
  middlewareAuth,
} = require("../middlewares/users");
const {
  registerController,
  loginController,
  logoutController,
  currentUserController,
} = require("../controllers/users");

router.get("/", (req, res) => {
  res.status(200).json({ message: "Test endpoint" });
});
router.post("/register", middlewareRegister, registerController);
router.post("/login", middlewareLogin, loginController);
router.post("/logout", middlewareAuth, logoutController);
router.get("/current", middlewareAuth, currentUserController);

module.exports = router;
