const jwt = require("jsonwebtoken");
const { User } = require("../models/user");

const middlewareAuth = async (req, res, next) => {
  const { authorization = "" } = req.headers;

  const [bearer, token] = authorization.split(" ");

  if (!authorization || bearer !== "Bearer") {
    res.status(401).json({ status: 401, message: "Not authorized" });
    return;
  }

  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findById(id);

    if (!user || !user.token || user.token !== token) {
      res.status(401).json({ status: 401, message: "Not authorized" });
      return;
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ status: 401, message: "Not authorized" });
  }
};

module.exports = { middlewareAuth };
