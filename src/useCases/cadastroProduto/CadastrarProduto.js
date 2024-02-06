import Produto from '../../entities/Produto.js';

class CadastrarProduto {
  constructor(produtoRepository) {
    this.produtoRepository = produtoRepository;
  }

  async execute(data) {
    try {
      const retorno = await this.produtoRepository.create(data);
      return new Produto(retorno, data.nome, data.preco, data.quantidade, data.estoque_id);
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export default CadastrarProduto;