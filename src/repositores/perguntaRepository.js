
class PerguntaRepository {
    async obterPerguntas() {
      const perguntas = await Pergunta.findAll({ raw: true, order:[
          ['id','DESC'] // ASC = Crescente || DESC = Decrescente
      ]});
      return perguntas;
    }
  }
  
  module.exports = PerguntaRepository;