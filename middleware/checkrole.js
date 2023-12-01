
const checkRole = (requiredRole) => {
    return (req, res, next) => {
      const userRole = req.user.role;
  
      if (userRole === 'admin') {
        next();
      } else {
        res.status(403).json({ error: 'Access denied. Insufficient permissions.' });
      }
    };
  };
  
  module.exports = checkRole;