const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

connection.connect((error) => {
  if (error) {
    if (process.env.NODE_ENV === "development") {
      console.log(error);
    }
    console.log("Erro ao conectar ao banco de dados");
    return;
  }

  console.log("Conectado ao banco de dados");
});

module.exports = connection;
