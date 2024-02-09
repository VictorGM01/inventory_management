import ProdutoRepositorySQLite from '../../frameworks/repositories/ProdutoRepositorySQLite.js';
import CadastrarProduto from '../../useCases/cadastroProduto/CadastrarProduto.js';

const produtoRepository = new ProdutoRepositorySQLite('src/data/database.db');
const cadastroProduto = new CadastrarProduto(produtoRepository);

export default async (req, res) => {
  const produto = await cadastroProduto.execute(req.body);
  if (produto) {
    res.status(200).json(produto);
  } else {
    res.status(500).json({ message: 'Erro ao cadastrar produto. Verifique os dados informados.' });
  }
};
