const BaseController = require("./base.controller");
class Controller extends BaseController {
  constructor(model) {
    super();
    this.model = model;
  }

  async store(req, res) {
    try {
      const result = await this.model.create(req.body);

      res.send({ data: result });
    } catch (error) {
      this.sendErrorResponse(res, error);
    }
  }

  async getAll(req, res) {
    try {
      const result = await this.model.findAll();

      res.send({ data: result });
    } catch (err) {
      this.sendErrorResponse(res, error);
    }
  }

  async getOne(req, res) {
    try {
      const id = Number(req.params.id);

      const result = await this.model.findByPk(id);

      if (!result) {
        return res.status(404).send({ message: "Registro não encontrado" });
      }

      res.send({ data: result });
    } catch (error) {
      this.sendErrorResponse(res, error);
    }
  }

  async update(req, res) {
    try {
      const id = Number(req.params.id);
      const body = req.body;

      const result = await this.model.update(body, { where: { id } });

      res.send({ data: result });
    } catch (error) {
      this.sendErrorResponse(res, error);
    }
  }

  async remove(req, res) {
    try {
      const id = req.params.id;

      const result = await this.model.destroy({ where: { id } });

      if (result === 0) {
        return res.status(404).send({ message: "Registro não encontrado" });
      }

      res.send({ message: "Registro Removido" });
    } catch (error) {
      this.sendErrorResponse(res, error);
    }
  }
}

module.exports = Controller;
