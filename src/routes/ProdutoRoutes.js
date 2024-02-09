import { Router } from 'express';
const router = Router();
import consultaProdutos from '../interfaces/controllers/ConsultaProdutosController.js';
import cadastrarProduto from '../interfaces/controllers/CadastroProdutoController.js';


router
  .get('/:id', consultaProdutos)
  .post('/', cadastrarProduto);


export default router;