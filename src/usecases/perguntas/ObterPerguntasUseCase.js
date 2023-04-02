// ObterPerguntasUseCase.js
class ObterPerguntasUseCase {
  constructor({ perguntaRepository }) {
    this.perguntaRepository = perguntaRepository;
  }

  async execute() {
    return await this.perguntaRepository.obterTodasAsPerguntas();
  }
}

module.exports = ObterPerguntasUseCase;