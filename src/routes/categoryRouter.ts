import express from 'express';
import { Categories } from '../controllers';
import { isPaginated, validateCategoryName } from '../middleware';

export const categoryRouter = express.Router();

categoryRouter  
  .get('/', isPaginated, Categories.getAll)
  .get('/:id', Categories.get)
  .delete('/:id', Categories.delete)
  .put('/:id', Categories.update)
  .post('/', validateCategoryName, Categories.add);
