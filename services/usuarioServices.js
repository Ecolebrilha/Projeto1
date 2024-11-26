const {sqlQuery} = require('../db')


function insertUser (nome, email, senha, cpf) {
    const q = `
    USE fernando_db
    INSERT INTO Usuarios (Nome, Email, Senha, cpf)
     VALUES
     ('${nome}', '${email}', '${senha}', '${cpf}')`
     
     sqlQuery(q)
 }
 
 function selectAllUsers () {
    const q = `
    USE fernando_db
    SELECT * FROM usuarios`
     
     sqlQuery(q)
 }
 
 function selectUserId (id) {
    const q = `
    USE fernando_db
    SELECT * FROM usuarios WHERE id = ${id}`
     
     sqlQuery(q)
 }
 
 function updateUser (nome, email, senha, cpf, id) {
    const q = `
    USE fernando_db
    UPDATE usuarios SET Nome = '${nome}', Email = '${email}', Senha = '${senha}', cpf = '${cpf}' WHERE id = '${id}'`
     
     sqlQuery(q)
     selectUserId(id)
 }
 
 function deleteUser (id) {
    const q = `
    USE fernando_db
    DELETE FROM usuarios WHERE id = '${id}'`
     
     sqlQuery(q)
     selectAllUsers()
 }

 module.exports={
    selectAllUsers
 }