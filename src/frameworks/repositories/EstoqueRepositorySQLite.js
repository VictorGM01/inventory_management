import sqlite3 from 'sqlite3';
import IEstoqueRepository from '../../interfaces/repositories/IEstoqueRepository.js';
import Estoque from '../../entities/Estoque.js';


class EstoqueRepositorySQLite extends IEstoqueRepository {
  constructor(dbPath) {
    super();
    this.db = new sqlite3.Database(dbPath);
  }

  get(id) {
    return new Promise((resolve, reject) => {
      this.db.get('SELECT * FROM Estoques WHERE id = ?', [id], (err, row) => {
        if (err) {
          reject(err);
        } else {
          if (row) {
            const estoque = new Estoque(row.id, row.nome);
            resolve(estoque);
          } else {
            resolve(null);
          }
        }
      });
    });
  }

  create(estoque) {
    return new Promise((resolve, reject) => {
      this.db.run('INSERT INTO Estoques (nome) VALUES (?)', [estoque.nome], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve(this.lastID);
        }
      });
    });
  }
}

export default EstoqueRepositorySQLite;