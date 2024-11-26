const express = require('express')
const app = express()

const usuarioServices = require('./services/usuarioServices')

app.get('/users',(req,res)=>{
    res.sender(usuarioServices.selectAllUsers());
})
app.post('/users',(req,res)=>{
    usuarioServices.selectAllUsers();
})

app.listen(3000,()=>{
console.log("Servidor rodando na porta 3000!")
})