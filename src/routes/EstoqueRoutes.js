import { Router } from 'express';
const router = Router();
import cadastroEstoque from '../interfaces/controllers/CadastroEstoqueController.js';
import consultaEstoques from '../interfaces/controllers/ConsultaEstoquesController.js';


router
  .post('/', cadastroEstoque)
  .get('/:id', consultaEstoques);


export default router;