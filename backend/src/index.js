const express = require("express");

const UserRouter = require("./routes/user.router");

const app = express();

app.use(express.json());

app.use("/api", UserRouter);

app.get("/", (req, res) => {
  res.send({ message: "Welcome to SocialCode" });
});

app.listen(3333, () => {
  console.log("Aplicação rodando 3333");
});
