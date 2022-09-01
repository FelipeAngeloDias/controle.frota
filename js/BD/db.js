const Sequelize = require ('sequelize');

const componenteSequelize = new Sequelize ('frota_rcs','root','', 
{
    dialect:'mysql', host:'localhost'
});

module.exports = componenteSequelize;