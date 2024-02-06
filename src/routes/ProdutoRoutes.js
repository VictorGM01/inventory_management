import { Router } from 'express';
const router = Router();
import consultaProdutos from '../interfaces/controllers/ConsultaProdutosController.js';


router
  .get('/:id', consultaProdutos);


export default router;