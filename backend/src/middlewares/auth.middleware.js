const jwt = require("jsonwebtoken");

const publicRoutes = ["/", "/api/auth"];

const AuthMiddleware = (req, res, next) => {
  const { authorization } = req.headers;

  if (!process.env.AUTH_MIDDLEWARE_ENABLED || publicRoutes.includes(req.url)) {
    return next();
  }

  if (!authorization) {
    return res.status(401).send({ message: "Authorization not found" });
  }

  const [, token] = authorization.split(" ");

  try {
    jwt.verify(token, process.env.JWT_SECRET);

    next();
  } catch (error) {
    res.status(401).send({ message: "Invalid Access Token" });
  }
};

module.exports = AuthMiddleware;
