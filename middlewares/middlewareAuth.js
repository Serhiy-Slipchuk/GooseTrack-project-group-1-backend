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

    req.user = {
      _id: user._id,
      name: user.name,
      email: user.email,
      avatarURL: user.avatarURL,
      phone: user.phone,
      skype: user.skype,
      birthday: user.birthday,
      role: user.role,
      theme: user.theme,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    }
   
    next();
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

module.exports = { middlewareAuth };
