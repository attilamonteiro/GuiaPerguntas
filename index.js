const app = require("./src/interfaces/server");


app.listen(host: '0.0.0.0', process.env.PORT ? Number(process.env.PORT) : 8080, () => console.log("Servidor rodando!"));