const express = require("express");
const connection = require("../config/database");
const Pergunta = require("../models/Pergunta");
const Resposta = require("../models/Resposta");
const middlewares = require("./middlewares");
const app = express();

// Instanciar ObterPerguntasUseCase e PerguntaController
const perguntaRepository = require("../repositores/perguntaRepository")
const ObterPerguntasUseCase = require("../usecases/perguntas/ObterPerguntasUseCase");
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

app.get("/sobre", (req, res) => {
  res.render("sobre");
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/salvarpergunta", async (req, res) => {
  const { titulo, descricao } = req.body;

  try {
    await perguntaRepository.salvarPergunta(titulo, descricao);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocorreu um erro ao salvar a pergunta.");
  }
});

app.get("/pergunta/:id", async (req ,res) => {
  var id = req.params.id;
  const pergunta = await Pergunta.findOne({ where: {id: id} });
  if(pergunta != undefined) {
    const respostas = await Resposta.findAll({ where: {perguntaId: pergunta.id}, order:[['id','DESC']] });
    res.render("pergunta",{ pergunta: pergunta, respostas: respostas });
  } else {
    res.redirect("/");
  }
});

app.post("/responder", (req, res) => {
  var corpo = req.body.corpo;
  var perguntaId = req.body.pergunta;
  Resposta.create({
    corpo: corpo,
    perguntaId: perguntaId
  }).then(() => {
    res.redirect("/pergunta/"+perguntaId);
  });
});

app.post('/excluir', async (req, res) => {
    const id = req.body.id; // id da pergunta ou resposta a ser excluída
  
    // Verifica se o ID é válido
    if (!id) {
      res.status(400).send('ID inválido');
      return;
    }
  
    try {
      // Tenta encontrar a pergunta ou resposta pelo ID
      const pergunta = await Pergunta.findByPk(id);
      const resposta = await Resposta.findByPk(id);
  
      // Verifica se a pergunta ou resposta existe
      if (!pergunta && !resposta) {
        res.status(404).send('Pergunta ou resposta não encontrada');
        return;
      }
  
      // Exclui a pergunta ou resposta
      if (pergunta) {
        await pergunta.destroy();
        res.redirect('/');
      } else if (resposta) {
        await resposta.destroy();
        res.redirect('back');
      }
    } catch (error) {
      console.log(error);
      res.status(500).send('Erro ao excluir pergunta ou resposta');
    }
  });


module.exports = app;