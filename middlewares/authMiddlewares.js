const jwt = require("jsonwebtoken");
// middleware/authMiddleware.js
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization; // Assuming Bearer token

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    // Verify token (use your preferred method, e.g., JWT)
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Attach user to request object
    next(); // Continue to the next middleware/route handler
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;
