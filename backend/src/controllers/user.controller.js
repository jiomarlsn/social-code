const UserModel = require("../model/user.model");

class UserController {
  async store(req, res) {
    try {
      const result = await UserModel.create(req.body);

      res.send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async getAll(req, res) {
    try {
      const users = await UserModel.findAll();

      res.send(users);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async getOne(req, res) {
    const id = Number(req.params.id);

    const user = await UserModel.findByPk(id);

    if (!user) {
      return res.status(404).send({ message: "Usuário não encontrado" });
    }

    res.send({ user });
  }

  async update(req, res) {
    const id = Number(req.params.id);
    const body = req.body;

    const response = await UserModel.update(body, { where: { id } });

    res.send({ response });
  }

  async remove(req, res) {
    const id = req.params.id;

    const response = await UserModel.destroy({ where: { id } });

    if (response === 0) {
      return res.status(404).send({ message: "Usuário não encontrado" });
    }

    res.send({ message: "Usuário Removido" });
  }
}

module.exports = UserController;
