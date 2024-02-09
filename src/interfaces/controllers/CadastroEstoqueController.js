import EstoqueRepositorySQLite from '../../frameworks/repositories/EstoqueRepositorySQLite.js';
import CadastrarEstoque from '../../useCases/cadastroEstoque/CadastrarEstoque.js';

const estoqueRepository = new EstoqueRepositorySQLite('src/data/database.db');
const cadastroEstoque = new CadastrarEstoque(estoqueRepository);

export default async (req, res) => {
  const produto = await cadastroEstoque.execute(req.body);
  if (produto) {
    res.status(200).json(produto);
  } else {
    res.status(500).json({ message: 'Erro ao cadastrar estoque' });
  }
};
