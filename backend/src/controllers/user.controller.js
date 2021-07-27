const database = require("../config/database");

let users = [];

class UserController {
  store(req, res) {
    const user = {
      ...req.body,
      id: users.length + 1,
      reg_date: new Date().toISOString(),
    };

    users = [...users, user];

    res.send(user);
  }

  getAll(req, res) {
    database.query(
      `SELECT U.*, NA.name as nivel_acesso FROM USER U
       JOIN NIVEL_ACESSO NA on U.nivel_acesso_id = NA.id`,
      function (error, results, fields) {
        if (error) throw error;
        console.log("All users:", results);
      }
    );

    res.send(users);
  }

  getOne(req, res) {
    const id = Number(req.params.id);

    const user = users.find((user) => {
      if (user.id === id) {
        return user;
      }
    });

    res.send({ user });
  }

  update(req, res) {
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
  }

  remove(req, res) {
    const id = Number(req.params.id);

    users = users.filter((user) => {
      return user.id !== id;
    });

    res.send({ message: "Usuário removido" });
  }
}

module.exports = UserController;
