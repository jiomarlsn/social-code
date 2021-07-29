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

  getOne(req, res) {
    const id = Number(req.params.id);

    // Buscar por ID XXX

    res.send({ user: {} });
  }

  update(req, res) {
    const id = Number(req.params.id);
    const body = req.body;

    // Atualizar usuário de ID X por dados Y

    res.send({ id, users });
  }

  remove(req, res) {
    const id = Number(req.params.id);

    // Remover usuário de ID X

    res.send({ message: "Usuário removido" });
  }
}

module.exports = UserController;
