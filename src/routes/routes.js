import produtoRoutes from './ProdutoRoutes.js';

export default (app) => {
    app.use('/produtos', produtoRoutes);
};
