import { Router } from 'express';

import CreateSession from '../services/CreateSession';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const createSession = new CreateSession();

  const { user, token } = await createSession.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
