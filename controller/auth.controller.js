require("dotenv").config();
const authController = {};
const jwt = require("jsonwebtoken");
authController.authenticate = (req, res, next) => {
  try {
    const tokenString = req.headers.authorization; // Bearer ~
    if (!tokenString) {
      throw new Error("invalid token");
    }
    const token = tokenString.replace("Bearer ", "");
    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, payload) => {
      if (error) {
        throw new Error("invalid token");
      }
      req.userId = payload._id;
    });
    next();
  } catch (error) {
    res.status(400).json({ status: "fail" });
  }
};

module.exports = authController;
