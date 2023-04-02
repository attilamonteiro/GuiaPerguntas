const app = require("./src/interfaces/server");

app.listen(process.env.PORT || 8080, () => console.log("Servidor rodando!"));