const Sequelize = require('sequelize');

const sequelize = new Sequelize('frota_rcs', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log('Conexão com banco de dados realizado.');
  }).catch (function() {
    console.log('Erro com a conexão do banco de dados.');
});


module.exports = sequelize;