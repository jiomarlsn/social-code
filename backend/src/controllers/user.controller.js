const UserModel = require("../model/user.model");
const Controller = require("./controller");

class UserController extends Controller {
  constructor() {
    super(UserModel);
  }
}

module.exports = UserController;
