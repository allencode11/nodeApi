import { DEFAULT_LIMIT, MAX_LIMIT, MIN_LIMIT } from '../constants';
import express from 'express';
import { Categories } from '../controllers';
import { validateCategoryId, isPaginated, validateCategoryName } from '../middleware';

export const categoryRouter = express.Router();

categoryRouter  
  .get('/', isPaginated, Categories.getAll)
  .get('/:id', validateCategoryId, Categories.get)
  .delete('/:id', validateCategoryId, Categories.delete)
  .put('/:id', validateCategoryId, Categories.update)
  .post('/', validateCategoryName, Categories.add);
