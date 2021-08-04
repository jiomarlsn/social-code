const LanguageModel = require("../model/language.model");
const Controller = require("./controller");

class LanguageController extends Controller {
  constructor() {
    super(LanguageModel);
  }

  store(req, res) {
    if (req.body.name.length >= 20) {
      return res.send({
        message: "O campo Name excedeu o limite de 20 caracteres",
      });
    }

    super.store(req, res);
  }
}

module.exports = LanguageController;
