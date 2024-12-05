const { sqlQuery } = require('../db')

class usuarioServices {
    insertUser(nome, email, senha, cpf) {
        const q = `
        USE fernando_db
        INSERT INTO Usuarios (Nome, Email, Senha, cpf)
         VALUES
         ('${nome}', '${email}', '${senha}', '${cpf}')`

         const result = sqlQuery(q)
         return result;
    }

    selectAllUsers() {
        const q = `
        USE fernando_db
        SELECT * FROM usuarios`

        const result = sqlQuery(q)
        return result;
    }

    selectUserId(id) {
        const q = `
        USE fernando_db
        SELECT * FROM usuarios WHERE id = ${id}`

        const result = sqlQuery(q)
        return result;
    }

    updateUser(nome, email, senha, cpf, id) {
        const q = `
        USE fernando_db
        UPDATE usuarios SET Nome = '${nome}', Email = '${email}', Senha = '${senha}', cpf = '${cpf}' WHERE id = '${id}'`

        const result = sqlQuery(q)
        return result;
    }

    deleteUser(id) {
        const q = `
        USE fernando_db
        DELETE FROM usuarios WHERE id = '${id}'`

        const result = sqlQuery(q)
        return result;
    }
}


module.exports = new usuarioServices;