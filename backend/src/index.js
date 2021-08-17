require("dotenv").config();
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

const AuthMiddleware = require("./middlewares/auth.middleware");
const CategoryRouter = require("./routes/categories.router");
const UserRouter = require("./routes/user.router");
const ActorRouter = require("./routes/actor.router");
const LanguageRouter = require("./routes/language.router");

const HTTP_PORT = process.env.HTTP_PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(AuthMiddleware);

app.use("/api", ActorRouter);
app.use("/api", CategoryRouter);
app.use("/api", LanguageRouter);
app.use("/api", UserRouter);

app.get("/", (req, res) => {
  res.send({ message: "Welcome to SocialCode" });
});

app.listen(HTTP_PORT, () => {
  console.log(`Aplicação rodando ${HTTP_PORT}`);
});
