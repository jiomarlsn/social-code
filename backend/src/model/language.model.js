const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Language = sequelize.define(
  "Language",
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

module.exports = Language;
