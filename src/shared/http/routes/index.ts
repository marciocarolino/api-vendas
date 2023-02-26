import productsRouter from '@modules/products/routes/products.routes';
import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.send({ message: 'Hello Dev!' });
});

routes.use('/products', productsRouter);


export default routes;
