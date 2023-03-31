class ObterPerguntasUseCase {
    constructor(perguntaRepository) {
      this.perguntaRepository = perguntaRepository;
    }
  
    async execute() {
      const perguntas = await this.perguntaRepository.obterPerguntas();
      return perguntas;
    }
  }
  
  module.exports = ObterPerguntasUseCase;