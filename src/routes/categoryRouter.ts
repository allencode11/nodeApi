import express from 'express';
import { Category } from '../controllers';

export const categoryRouter = express.Router();

categoryRouter  
  .get('/', Category.getAllCategories)
  .get('/:name', Category.getAll)
  .delete('/:id', Category.delete)
  .patch('/:id', Category.put)
  .post('/:id', Category.add);
