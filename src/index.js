const { PORT } = require("./config/db");
const app = require("./interfaces/server")
const dbConfig = ("./config/db.js")

app.listen(PORT, () => console.log("Servidor rodando!"));