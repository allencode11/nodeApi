import express from 'express';
import { isPaginated } from '../middleware';
import { Skills, Users } from '../controllers';

export const searchRouter = express.Router();

searchRouter
  //.get('/',isPaginated, Skills.search)
  .get('/:id', Users.get);
