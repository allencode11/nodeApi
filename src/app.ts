import express from 'express';
import morgan from 'morgan';
import { userRouter, categoryRouter, skillRouter } from './routes';
import { sequelizeClient } from './sequelizeInit';
import cors from 'cors';


const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(cors({ origin:'*'}))
app.set('sequelizeClient', sequelizeClient);

app.use('/category', categoryRouter);
app.use('/skills', skillRouter);
app.use('/user', userRouter);

export default app;
