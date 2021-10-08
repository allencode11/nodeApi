import express from 'express';
import morgan from 'morgan';
import { Sequelize, Dialect } from 'sequelize';
import searchRouter from './routes/searchRoutes';
import authRouter from './routes/authRoutes';

const app = express();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT as Dialect,
  });

app.use(morgan('dev'));
app.use(express.json());

app.use('/search', searchRouter);
app.use('/users', authRouter);

export default app;
