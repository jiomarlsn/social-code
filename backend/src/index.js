require("dotenv").config();
const morgan = require("morgan");
const express = require("express");

const AuthMiddleware = require("./middlewares/auth.middleware");
const UserRouter = require("./routes/user.router");
const LanguageRouter = require("./routes/language.router");

const HTTP_PORT = process.env.HTTP_PORT || 3000;

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(AuthMiddleware);

app.use("/api", UserRouter);
app.use("/api", LanguageRouter);

app.get("/", (req, res) => {
  res.send({ message: "Welcome to SocialCode" });
});

app.listen(HTTP_PORT, () => {
  console.log(`Aplicação rodando ${HTTP_PORT}`);
});
