const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','123456',{
    host: '0.0.0.0',
    dialect: 'mysql',
    port:'3306'
});

module.exports = connection;
