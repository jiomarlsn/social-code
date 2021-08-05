const ActorModel = require("../model/actor.model");
const Controller = require("./controller");

class ActorController extends Controller {
  constructor() {
    super(ActorModel);
  }
}

module.exports = ActorController;
