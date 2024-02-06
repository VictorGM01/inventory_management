import sqlite3 from 'sqlite3';
import IProdutoRepository from '../../interfaces/repositories/IProdutoRepository.js';
import Produto from '../../entities/Produto.js';


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

  create(produto) {
    return new Promise((resolve, reject) => {
      this.db.run('INSERT INTO Produtos (nome, preco, quantidade, estoque_id) VALUES (?, ?, ?, ?)', [produto.nome, Number(produto.preco), Number(produto.quantidade), Number(produto.estoque_id)], function(err) {
        if (err) {
          reject(err);
        } else {
          resolve(this.lastID);
        }
      });
    });
  }
}

export default ProdutoRepositorySQLite;