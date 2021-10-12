import express from 'express';
import { Categories } from '../controllers';

export const categoryRouter = express.Router();

categoryRouter  
  .get('/', Categories.getAllCategories)
  .get('/:name', Categories.getAll)
  .delete('/:id', Categories.delete)
  .patch('/:id', Categories.put)
  .post('/:id', Categories.add);
