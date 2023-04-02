const Pergunta = require('../models/Pergunta')

module.exports = {
  obterTodasAsPerguntas: async () => {
    const perguntas = await Pergunta.findAll({
      order: [["id", "DESC"]],
    });
    return perguntas;
  },

  obterPerguntaPorId: async (id) => {
    const pergunta = await Pergunta.findOne({ where: { id } });
    return pergunta;
  },

  salvarPergunta: async (titulo, descricao) => {
    const pergunta = await Pergunta.create({ titulo, descricao });
    return pergunta;
  },
};