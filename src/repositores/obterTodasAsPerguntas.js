class ObterPerguntaUseCase {
  constructor(perguntaRepository, respostaRepository) {
    this.perguntaRepository = perguntaRepository;
    this.respostaRepository = respostaRepository;
  }

  async execute(id) {
    const pergunta = await this.perguntaRepository.obterPerguntaPorId(id);

    if (!pergunta) {
      throw new Error("Pergunta não encontrada");
    }

    const respostas = await this.respostaRepository.obterRespostasPorPerguntaId(id);

    return { pergunta, respostas };
  }
}

module.exports = ObterPerguntaUseCase;