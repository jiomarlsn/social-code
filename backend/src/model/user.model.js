const connection = require("../config/database");

class UserModel {
  async getAllUsers() {
    const result = await connection.promise().query(
      `SELECT U.*, NA.name as nivel_acesso FROM USER U
            JOIN NIVEL_ACESSO NA on U.nivel_acesso_id = NA.id`
    );

    return result[0];
  }

  async createUser(data) {
    const result = await connection.promise().query(
      `INSERT INTO USER (firstname, lastname, email, nivel_acesso_id) 
          values ('${data.firstname}', '${data.lastname}', '${data.email}', ${data.nivel_acesso_id})`
    );

    return result;
  }

  updateUser() {}

  removeUser() {}

  getOneUser() {}
}

module.exports = UserModel;
