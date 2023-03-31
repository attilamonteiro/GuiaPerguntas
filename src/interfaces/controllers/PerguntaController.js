const ObterPerguntasUseCase = require("../usecases/perguntas/obterPerguntas");

class PerguntaController {
  constructor() {
    this.obterPerguntasUseCase = new ObterPerguntasUseCase();
  }

  async obterPerguntas() {
    try {
      const perguntas = await this.obterPerguntasUseCase.execute();
      return perguntas;
    } catch (error) {
      throw new Error(`Erro ao obter perguntas: ${error}`);
    }
  }
}

module.exports = PerguntaController;