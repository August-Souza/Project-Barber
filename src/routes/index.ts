import { Router } from 'express';

const routes = Router();

routes.get('/appointments', (resquest, response) =>
  response.json({ message: 'Hello Louise' }),
);

export default routes;
