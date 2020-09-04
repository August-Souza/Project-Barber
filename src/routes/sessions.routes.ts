import { Router } from 'express';

import CreateSession from '../services/CreateSession';

const sessionsRouter = Router();

sessionsRouter.post('/sessions', async (request, response) => {
  try {
    const { email, password } = request.body;

    const createSession = new CreateSession();

    const { user, token } = await createSession.execute({
      email,
      password,
    });

    delete user.password;

    return response.json({ user, token });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default sessionsRouter;
