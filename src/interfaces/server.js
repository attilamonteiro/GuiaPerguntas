
const app = express();
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta");
const middlewares = require("./src/interfaces/middlewares");

// Instanciar ObterPerguntasUseCase e PerguntaController
const ObterPerguntasUseCase = require("../usecases/perguntas/obterPerguntas");
const PerguntaController = require("./controllers/PerguntaController");
const obterPerguntasUseCase = new ObterPerguntasUseCase({ perguntaRepository });
const perguntaController = new PerguntaController({ obterPerguntasUseCase });

//Database
connection
.authenticate()
.then(() => {
console.log("Conexão feita com o banco de dados!");
})
.catch((msgErro) => {
console.log(msgErro);
});

// Estou dizendo para o Express usar o EJS como View engine
app.set("view engine", "ejs");
app.use(express.static("public"));

// Middlewares
middlewares(app);

// Rotas
app.get("/", async (req, res) => {
try {
const perguntas = await perguntaController.obterPerguntas();
res.render("index", { perguntas });
} catch (error) {
console.log(error);
res.status(500).send("Ocorreu um erro ao buscar as perguntas.");
}
});

app.get("/perguntar", (req, res) => {
res.render("perguntar");
});

// Omissão de código das demais rotas

app.listen(8080, () => {
console.log("App rodando!");
});