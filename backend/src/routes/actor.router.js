const express = require("express");

const ActorController = require("../controllers/actor.controller");

const Router = express.Router();

const controller = new ActorController();

Router.get("/actor/:id", (req, res) => controller.getOne(req, res));
Router.get("/actor", (req, res) => controller.getAll(req, res));
Router.post("/actor", (req, res) => controller.store(req, res));
Router.put("/actor/:id", (req, res) => controller.update(req, res));
Router.delete("/actor/:id", (req, res) => controller.remove(req, res));

module.exports = Router;
