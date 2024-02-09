class ConsultarProdutos {
    constructor(estoqueRepository) {
      this.estoqueRepository = estoqueRepository;
    }
  
    async execute(id) {
      return await this.estoqueRepository.get(id);
    }
  }
  
  export default ConsultarProdutos;