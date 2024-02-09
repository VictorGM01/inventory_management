import EstoqueRepositorySQLite from '../../frameworks/repositories/EstoqueRepositorySQLite.js';
import ConsultarEstoques from '../../useCases/consultaEstoques/ConsultarEstoques.js';

const estoqueRepository = new EstoqueRepositorySQLite('src/data/database.db');
const obterEstoque = new ConsultarEstoques(estoqueRepository);

export default async (req, res) => {
  const { id } = req.params;
  const produto = await obterEstoque.execute(id);
  if (produto) {
    res.status(200).json(produto);
  } else {
    res.status(404).json({ message: 'Estoque não encontrado' });
  }
};
