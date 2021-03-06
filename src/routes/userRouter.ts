import express from 'express';
import { validateEmail, isPaginated } from '../middleware';
import { Users } from '../controllers';

export const userRouter = express.Router();

userRouter
  .get('/', isPaginated, Users.getAll)
  .get('/:id', Users.get)
  .delete('/:id', Users.delete)
  .put('/:id', Users.put)
  .post('/', validateEmail, Users.post);
