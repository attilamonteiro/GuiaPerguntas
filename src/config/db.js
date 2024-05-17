const dbConfig = {
    PORT: process.env.PORT || 8080,
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || '123456',
    DB_NAME: process.env.DB_NAME || 'guiaperguntas',
    DB_PORT: process.env.DB_PORT || 3307,
    DB_DIALECT: process.env.DB_DIALECT || 'mysql'
    };
    
module.exports = dbConfig;