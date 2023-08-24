const express = require("express");
const router = express.Router();

const { middlewareRegister } = require("../middlewares/users");
const { registerController } = require("../controllers/users");

router.get("/", (req, res) => {
  res.status(200).json({ message: "Test endpoint" });
});
router.post("/register", middlewareRegister, registerController);

module.exports = router;
