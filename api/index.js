const express = require('express')
const app = express()
const usuarioRoutes = require("./routes/usuarioRoutes")
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/api', usuarioRoutes)

app.listen(3000,()=>{
console.log("Servidor rodando na porta 3000!")
})