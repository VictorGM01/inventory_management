class Produto {
  constructor(id, nome, preco, desconto, quantidade, estoque_id) { // Alterando "preco" para incluir "desconto"
    this.id = id;
    this.nome = nome;
    this.preco = preco - desconto; // Modificado para aplicar desconto diretamente
    this.quantidade = quantidade;
    this.estoque_id = estoque_id;
  }
}

export default Produto;