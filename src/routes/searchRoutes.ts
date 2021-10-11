import express from 'express';
import { Search } from '../controllers';

export const searchRouter = express.Router();

searchRouter
  .get('/', Search.find)
  .get('/:id', Search.get)
  .delete('/:id', Search.delete)
  .patch('/:id', Search.put)
  .post('/:id', Search.post);
