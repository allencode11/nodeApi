import express from 'express';
import morgan from 'morgan';
import { authRouter, searchRouter, categoryRouter } from './routes';
import { sequelizeClient } from './sequelizeInit';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.set('sequelizeClient', sequelizeClient);

app.use('/search', searchRouter);
app.use('/users', authRouter);
app.use('/category', categoryRouter);

export default app;
