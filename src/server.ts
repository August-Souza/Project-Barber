import 'reflect-metadata';

import express from 'express';

import './database';
import appointmentsRouter from './routes/appointments.routes';
import usersRouter from './routes/users.routes';
import routes from './routes';
import sessionsRouter from './routes/sessions.routes';
import uploadConfig from './config/upload';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));

app.use('/sessions', sessionsRouter);
app.use('/users', usersRouter);
app.use('/appointments', appointmentsRouter);

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
