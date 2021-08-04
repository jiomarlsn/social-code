const express = require("express");

const LanguageController = require("../controllers/language.controller");

const Router = express.Router();

const controller = new LanguageController();

Router.get("/language/:id", (req, res) => controller.getOne(req, res));
Router.get("/language", (req, res) => controller.getAll(req, res));
Router.post("/language", (req, res) => controller.store(req, res));
Router.put("/language/:id", (req, res) => controller.update(req, res));
Router.delete("/language/:id", (req, res) => controller.remove(req, res));

module.exports = Router;
