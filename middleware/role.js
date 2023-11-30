const Users = require("../models/Users");

const checkRole = (role) => {
    return (req, res, next) => {
      if (req.user && req.user.role === role) {
        next();
      } else {
        res.json({ error: 'Access denied. Insufficient permissions.' });
      }
    };
  };
  
module.exports = checkRole;