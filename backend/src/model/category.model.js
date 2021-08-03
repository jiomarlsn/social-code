const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Category = sequelize.define(
  "Category",
  {
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    underscored: true,
    timestamps: true,
  }
);

module.exports = Category;
