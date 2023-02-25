import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.send({ message: 'Hello Dev!' });
});

export default routes;
