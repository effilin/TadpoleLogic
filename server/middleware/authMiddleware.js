const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET;

function authToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.sendStatus(401).json({ error: "no token provided" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.sendStatus(403).json({ error: "invalid or expired token" });
  }
}

module.exports = authToken;
