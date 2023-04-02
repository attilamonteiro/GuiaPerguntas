const app = require("./src/interfaces/server");


app.listen(process.env.PORT ? Number(process.env.PORT) : 8080, '0.0.0.0', () => console.log("Servidor rodando!"));