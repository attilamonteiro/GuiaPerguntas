const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','123456',{
    host: '0.0.0.0',
    dialect: 'mysql'
});

module.exports = connection;
