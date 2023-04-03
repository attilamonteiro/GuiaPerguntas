const Sequelize = require('sequelize');
const dbConfig = require("../config/db.js");

const connection = new Sequelize(dbConfig.DB_NAME,
dbConfig.DB_USER, dbConfig.DB_PASSWORD,
{
host: dbConfig.DB_HOST,
dialect: dbConfig.DB_DIALECT,
port: dbConfig.DB_PORT,
});

module.exports = connection;