import express from 'express';
import morgan from 'morgan';
import { authRouter, userRouter, searchRouter, categoryRouter, skillRouter } from './routes';
import { sequelizeClient } from './sequelizeInit';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.set('sequelizeClient', sequelizeClient);

app.use('/search', searchRouter);
app.use('/', authRouter);
app.use('/category', categoryRouter);
app.use('/skills', skillRouter);
app.use('/user', userRouter);

export default app;
