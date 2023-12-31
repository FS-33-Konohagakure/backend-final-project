const jwt = require("jsonwebtoken");

const Key = "ghfffygdf";

const verifyToken = (req, res, next) => {
  const header = req.headers.authorization;

  if (!header) {
    res.json({
      message: "undefined header, masukkan token yang telah diberikan ke dalam header.",
    });
    return;
  }

  const token = header.split(" ")[1];

  if (!token) {
    res.json({
      message: "invalid token",
    });
    return;
  }
  const payload = jwt.verify(token, Key);

  req.payload = payload;

  next();
};

module.exports = verifyToken;
