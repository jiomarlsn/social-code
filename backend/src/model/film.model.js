const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Language = require("./language.model");
const Actor = require("./actor.model");
const Category = require("./category.model");

const Film = sequelize.define(
  "Film",
  {
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    release_year: {
      type: DataTypes.INTEGER,
    },
    duration: {
      type: DataTypes.INTEGER,
    },
    replacement_cost: {
      type: DataTypes.DECIMAL(5, 2),
    },
    rating: {
      type: DataTypes.ENUM("WEAK", "GOOD", "GREAT"),
    },
  },
  {
    underscored: true,
    timestamps: true,
  }
);

Film.Language = Language.hasMany(Film);

Film.belongsToMany(Actor, { through: "film_actor" });
Film.belongsToMany(Category, { through: "film_category" });

Actor.belongsToMany(Film, { through: "film_actor" });
Category.belongsToMany(Film, { through: "film_category" });

module.exports = Film;
