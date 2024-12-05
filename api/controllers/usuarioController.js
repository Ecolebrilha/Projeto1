const usuarioServices = require("../services/usuarioServices")

class usuarioController {
   async insertUsers(req, res) {
        const nome = req.body.nome;
        const email = req.body.email;
        const senha = req.body.senha;
        const cpf = req.body.cpf;

        const usuario = {
            nome, email, senha, cpf
        }

        if (cpf.length > 11) {
            return res.status(403).json({message:"O CPF não pode conter menos de 11 números!"})
        } 

      await usuarioServices.insertUser(nome, email, senha, cpf);

        res.status(201).json({message:"O usuário foi inserido com sucesso!", usuario})
    }

    async selectUsersId(req, res) {
        const id = req.body.id;

        const usuario = await usuarioServices.selectUserId(id);
        res.status(200).json(usuario)
    }

    async updateUser(req, res) {
        const nome = req.body.nome;
        const email = req.body.email;
        const senha = req.body.senha;
        const cpf = req.body.cpf;
        const id = req.body.id;

        const usuario = {
            nome, email, senha, cpf, id
        }

        await usuarioServices.updateUser(nome, email, senha, cpf, id);

        res.status(200).json({message:"O usuário foi atualizado com sucesso!", usuario})
    }

    async deleteUser(req, res) {
        const id = req.body.id;

        const usuario = usuarioServices.selectUserId(id)
        await usuarioServices.deleteUser(id);

        res.status(200).json({message:"O usuário foi deletado com sucesso!", usuario})
    }

    async listarUsuarios(req, res) {
       const usuarios = await usuarioServices.selectAllUsers();
       res.status(200).json(usuarios)
    }
}

module.exports = new usuarioController;