const { PORT } = require("./src/config/db");
const app = require("./src/interfaces/server");
const dbConfig = ("./src/config/db.js");

app.listen(PORT, () => console.log("Servidor rodando!"));