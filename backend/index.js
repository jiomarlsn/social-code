const express = require("express");

const app = express();

app.use(express.json());

let users = [
  {
    id: 1,
    firstname: "keven",
    lastname: "leone",
    email: "keven.santos.sz@gmail.com",
    reg_date: new Date().toISOString(),
  },
  {
    id: 2,
    firstname: "rodrigo",
    lastname: "leonardo",
    email: "leonardo@gmail.com",
    reg_date: new Date().toISOString(),
  },
];

app.get("/user", (req, res) => {
  res.send(users);
});

app.get("/user/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find((user) => {
    if (user.id === id) {
      return user;
    }
  });

  res.send({ user });
});

app.post("/user", (req, res) => {
  const user = {
    ...req.body,
    id: users.length + 1,
    reg_date: new Date().toISOString(),
  };

  users.push(user);

  res.send(user);
});

app.put("/user/:id", (req, res) => {
  const id = Number(req.params.id);
  const body = req.body;

  users = users.map((user) => {
    if (user.id === id) {
      const { firstname, lastname, email } = body;

      return { ...user, firstname, lastname, email };
    }

    return user;
  });

  res.send({ id, users });
});

app.delete("/user/:id", (req, res) => {
  const id = Number(req.params.id);

  users = users.filter((user) => {
    return user.id !== id;
  });

  res.send({ message: "Usuário removido" });
});

app.listen(3333, () => {
  console.log("Aplicação rodando 3333");
});
