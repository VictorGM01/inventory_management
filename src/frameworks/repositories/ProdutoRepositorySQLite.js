const sqlite3 = require('sqlite3').verbose();
const IProdutoRepository = require('../../interfaces/repositories/IProdutoRepository');
const Produto = require('../../entities/Produto');


class ProdutoRepositorySQLite extends IProdutoRepository {
  constructor(dbPath) {
    super();
    this.db = new sqlite3.Database(dbPath);
  }

  get(id) {
    return new Promise((resolve, reject) => {
      this.db.get('SELECT * FROM Produtos WHERE id = ?', [id], (err, row) => {
        if (err) {
          reject(err);
        } else {
          if (row) {
            const produto = new Produto(row.id, row.nome, row.preco, row.quantidade, roq.estoque_id);
            resolve(produto);
          } else {
            resolve(null);
          }
        }
      });
    });
  }
}

export default ProdutoRepositorySQLite;