import express from 'express';
import { Users } from '../controllers';

export const userRouter = express.Router();

userRouter
  .get('/', Users.getAll)
  .get('/:id', Users.get)
  .delete('/:id', Users.delete)
  .put('/:id', Users.put)
  .post('/', Users.post);
