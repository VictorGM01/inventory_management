class Produto {
  constructor(id, nome, preco, quantidade, estoque_id, categoria) { // Adicionando um novo campo "categoria"
    this.id = id;
    this.nome = nome;
    this.preco = preco - desconto; // Modificado para aplicar desconto diretamente
    this.quantidade = quantidade;
    this.estoque_id = estoque_id;
    this.categoria = categoria; // Novo campo
  }
}

export default Produto;