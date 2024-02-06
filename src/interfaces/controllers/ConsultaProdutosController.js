import ProdutoRepositorySQLite from '../../frameworks/repositories/ProdutoRepositorySQLite.js';
import ConsultarProdutos from '../../useCases/consultaProdutos/ConsultarProdutos.js';

const produtoRepository = new ProdutoRepositorySQLite('src/data/database.db');
const obterProduto = new ConsultarProdutos(produtoRepository);

export default async (req, res) => {
  const { id } = req.params;
  const produto = await obterProduto.execute(id);
  if (produto) {
    res.status(200).json(produto);
  } else {
    res.status(404).json({ message: 'Produto não encontrado' });
  }
};
