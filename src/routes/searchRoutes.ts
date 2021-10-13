import express from 'express';
import { Skills, Users } from '../controllers';

export const searchRouter = express.Router();

searchRouter
  .get('/', Skills.search)
  .get('/:id', Users.get);
