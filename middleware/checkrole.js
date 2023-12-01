
const checkRole = (requiredRole) => {
    return (req, res, next) => {
      // Assuming that the user role is stored in req.user.role after authentication
      const userRole = req.user.role;
  
      if (userRole === 'admin') {
        // User has admin role, proceed to the next middleware or route
        next();
      } else {
        // User does not have admin role, unauthorized
        res.status(403).json({ error: 'Access denied. Insufficient permissions.' });
      }
    };
  };
  
  module.exports = { checkRole };