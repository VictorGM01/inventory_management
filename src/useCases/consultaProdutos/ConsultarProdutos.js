class ConsultarProdutos {
  constructor(produtoRepository) {
    this.produtoRepository = produtoRepository;
  }

  async execute(id) {
    return await this.produtoRepository.get(id);
  }
}

export default ConsultarProdutos;