class IEstoqueRepository {
    get(id) {
      throw new Error("Método 'get' não implementado");
    }

    create(estoque) {
      throw new Error("Método 'create' não implementado");
    }
  }
  
  export default IEstoqueRepository;