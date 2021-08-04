class Controller {
  constructor(model) {
    this.model = model;
  }

  async store(req, res) {
    try {
      const result = await this.model.create(req.body);

      res.send({ data: result });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async getAll(req, res) {
    try {
      const result = await this.model.findAll();

      res.send({ data: result });
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async getOne(req, res) {
    const id = Number(req.params.id);

    const result = await this.model.findByPk(id);

    if (!result) {
      return res.status(404).send({ message: "Registro não encontrado" });
    }

    res.send({ data: result });
  }

  async update(req, res) {
    const id = Number(req.params.id);
    const body = req.body;

    const result = await this.model.update(body, { where: { id } });

    res.send({ data: result });
  }

  async remove(req, res) {
    const id = req.params.id;

    const result = await this.model.destroy({ where: { id } });

    if (result === 0) {
      return res.status(404).send({ message: "Registro não encontrado" });
    }

    res.send({ message: "Registro Removido" });
  }
}

module.exports = Controller;
