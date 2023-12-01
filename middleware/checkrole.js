const db = require("../models");

const checkRole = (requiredRole) => {
  return async (req, res, next) => {
    const { role } = req.body;

    const index = await db.Users.findOne(role);

    db.Users[index] = {
      role,
      };
      
    const userRole = index.role;

    if (userRole === "admin") {
      next();
    } else {
      res
        .status(403)
        .json({ error: "Access denied. Insufficient permissions." });
    }
  };
};

module.exports = { checkRole };
