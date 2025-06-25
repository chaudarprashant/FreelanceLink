// middleware/authMiddleware.js
import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Access Denied" });
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    // req.user = { id: verified.id, role: verified.role };
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid Token" });
  }
};
export default authMiddleware;