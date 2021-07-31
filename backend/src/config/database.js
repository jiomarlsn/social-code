const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Sequelize Connected with Success");
  })
  .catch((error) => {
    console.error(error);
  });

sequelize
  .sync()
  .then(() => {
    console.log("Sync Sequelize");
  })
  .catch(() => {
    console.log("Error Sync Sequelize");
  });

module.exports = sequelize;
