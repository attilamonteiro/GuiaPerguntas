const perguntaRepository = require("../../repositores/perguntaRepository")
class PerguntaController {
  constructor({ obterPerguntasUseCase }) {
    this.obterPerguntasUseCase = obterPerguntasUseCase;
  }

  async obterPerguntas() {
    return await this.obterPerguntasUseCase.execute();
  }
}

module.exports = PerguntaController;