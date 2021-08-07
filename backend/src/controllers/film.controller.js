const Controller = require("./controller");
const FilmModel = require("../model/film.model");

class FilmController extends Controller {
  constructor() {
    super(FilmModel);
  }
}

module.exports = FilmController;
