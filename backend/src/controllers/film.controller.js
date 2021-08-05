const FilmModel = require("../model/film.model");
const Controller = require("./controller");

class FilmController extends Controller {
  constructor() {
    super(FilmModel);
  }
}

module.exports = FilmController;
