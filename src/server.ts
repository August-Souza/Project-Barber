import 'reflect-metadata';

import express from 'express';

import './database';
import appointmentsRouter from './routes/appointments.routes';
import usersRouter from './routes/users.routes';

const app = express();

app.use(express.json());

app.use(appointmentsRouter);
app.use(usersRouter);

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
