import Estoque from '../../entities/Estoque.js';

class CadastrarEstoque {
  constructor(estoqueRepository) {
    this.estoqueRepository = estoqueRepository;
  }

  async execute(data) {
    const retorno = await this.estoqueRepository.create(data);
    return new Estoque(retorno, data.nome);
  }
}

export default CadastrarEstoque;