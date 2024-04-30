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
  console.log("Conexión a la base de datos Ok")
})

.catch(error => {
  console.log("Error al conectarse a la base de datos"+error)
})

//mostrar registros
clientesModel.findAll({attributes:['id', 'nomcli','apecli', 'nrodnicli', 'telcli']})
.then(clientes => {
  const resultados=JSON.stringify(clientes)
  console.log(resultados)
})
.catch(error => {
  console.log("No hay registros"+error)
})

app.listen(3000, () => {
  console.log('¡Conectados!')
})