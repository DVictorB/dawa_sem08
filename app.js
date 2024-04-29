const express = require ('express')
const Sequelize = require ('sequelize')
const app = express()

//params de conexión
const sequelize = new Sequelize('data', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
})


//modelo
const clientesModel = sequelize.define ('clientes', {
  "id": {type:Sequelize.INTEGER, primaryKey:true},
  "nomcli":Sequelize.STRING,
  "apecli":Sequelize.STRING,
  "nrodnicli":Sequelize.STRING,
  "telcli":Sequelize.STRING
})

//autentificamos
sequelize.authenticate()
.then(() => {
  console.log("¡Conectados a la base de daaatoooss!")
})

.catch(error => {
  console.log("No nos pudimos conectar"+error)
})

app.listen(3000, () => {
  console.log('¡¡Está vivo!!')
})