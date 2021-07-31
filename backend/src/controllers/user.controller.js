let users = [];

const UserModel = require("../model/user.model");

class UserController {
  constructor() {
    this.userModel = new UserModel();
  }

  async store(req, res) {
    try {
      const result = await this.userModel.createUser(req.body);

      res.send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async getAll(req, res) {
    try {
      const users = await this.userModel.getAllUsers();

      res.send(users);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async getOne(req, res) {
    const id = Number(req.params.id);

    const user = await this.userModel.getOneUser(id);

    if (!user) {
      return res.status(404).send({ message: "Usuário não encontrado" });
    }

    res.send({ user });
  }

  async update(req, res) {
    const id = Number(req.params.id);
    const body = req.body;

    const response = await this.userModel.updateUser(id, body);

    res.send({ response });
  }

  async remove(req, res) {
    const id = req.params.id;

    if (Number.isNaN(id)) {
      return res.status(404).send({ message: "Sai fora SQL Injenction" });
    }

    const response = await this.userModel.removeUser(id);

    if (response[0].affectedRows === 0) {
      return res.status(404).send({ message: "Usuário não encontrado" });
    }

    res.send(response);
  }
}

module.exports = UserController;
