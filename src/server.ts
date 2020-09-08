import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import './database';

import appointmentsRouter from './routes/appointments.routes';
import usersRouter from './routes/users.routes';
import sessionsRouter from './routes/sessions.routes';
import uploadConfig from './config/upload';

import AppError from './errors/AppError';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));

app.use('/sessions', sessionsRouter);
app.use('/users', usersRouter);
app.use('/appointments', appointmentsRouter);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
