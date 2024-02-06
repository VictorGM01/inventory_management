import produtoRoutes from './ProdutoRoutes.js';
import estoqueRoutes from './EstoqueRoutes.js';

export default (app) => {
    app.use('/produtos', produtoRoutes);
    app.use('/estoques', estoqueRoutes);
};
