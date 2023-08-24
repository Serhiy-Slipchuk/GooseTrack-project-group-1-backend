const express = require("express");
const router = express.Router();

const { middlewareRegister, middlewareLogin } = require("../middlewares/users");
const { registerController, loginController } = require("../controllers/users");

router.get("/", (req, res) => {
  res.status(200).json({ message: "Test endpoint" });
});
router.post("/register", middlewareRegister, registerController);
router.post("/login", middlewareLogin, loginController);

module.exports = router;
