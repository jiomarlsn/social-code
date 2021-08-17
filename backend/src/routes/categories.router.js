const express = require("express");

const CategoryController = require("../controllers/category.controller");

const Router = express.Router();

const controller = new CategoryController();

Router.get("/category/:id", (req, res) => controller.getOne(req, res));
Router.get("/category", (req, res) => controller.getAll(req, res));
Router.post("/category", (req, res) => controller.store(req, res));
Router.put("/category/:id", (req, res) => controller.update(req, res));
Router.delete("/category/:id", (req, res) => controller.remove(req, res));

module.exports = Router;
