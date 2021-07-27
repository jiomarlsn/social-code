const express = require("express");

const UserController = require("../controllers/user.controller");

const Router = express.Router();

const controller = new UserController();

Router.get("/user/:id", (req, res) => controller.getOne(req, res));
Router.get("/user", (req, res) => controller.getAll(req, res));
Router.post("/user", (req, res) => controller.store(req, res));
Router.put("/user/:id", (req, res) => controller.update(req, res));
Router.delete("/user/:id", (req, res) => controller.remove(req, res));

module.exports = Router;
