const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "socialcode",
});

connection.connect((error) => {
  if (error) {
    console.log("Erro ao conectar ao banco de dados:");
    return;
  }

  console.log("Conectado ao banco de dados");
});

module.exports = connection;
