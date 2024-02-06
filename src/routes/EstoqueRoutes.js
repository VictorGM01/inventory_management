import { Router } from 'express';
const router = Router();
import cadastroEstoque from '../interfaces/controllers/CadastroEstoqueController.js';


router
  .post('/cadastro', cadastroEstoque);


export default router;