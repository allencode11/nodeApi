import express from 'express';
import morgan from 'morgan';
import { userRouter, categoryRouter, skillRouter } from './routes';
import { sequelizeClient } from './sequelizeInit';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.set('sequelizeClient', sequelizeClient);

app.use('/category', categoryRouter);
app.use('/skills', skillRouter);
app.use('/user', userRouter);

export default app;
