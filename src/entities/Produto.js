class Produto {
  constructor(id, nome, preco, quantidade, estoque_id, categoria) { // Adicionando um novo campo "categoria"
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
    this.estoque_id = estoque_id;
    this.categoria = categoria; // Novo campo
  }
}

export default Produto;