const CategoryModel = require("../model/category.model");
const Controller = require("./controller");

class CategoryController extends Controller {
  constructor() {
    super(CategoryModel);
  }
}

module.exports = CategoryController;
