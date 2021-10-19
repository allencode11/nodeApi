import express from 'express';
import { validateUserId, validateEmail, isPaginated } from '../middleware';
import { Users } from '../controllers';

export const userRouter = express.Router();

userRouter
  .get('/', isPaginated, Users.getAll)
  .get('/:id', validateUserId, Users.get)
  .delete('/:id', validateUserId, Users.delete)
  .put('/:id', validateUserId, Users.put)
  .post('/', validateEmail, Users.post);
