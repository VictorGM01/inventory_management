import express, { json } from 'express';
const app = express();
const port = 3000;
import defineRoutes from './src/routes/routes.js';

app.use(json());

defineRoutes(app);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
