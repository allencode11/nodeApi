import { DEFAULT_LIMIT, MAX_LIMIT, MIN_LIMIT } from '../constants';
import express, { NextFunction, Response } from 'express';
import { PaginatedRequest } from 'types';
import { Categories } from '../controllers';
import { isPaginated } from '../middleware';


export const categoryRouter = express.Router();

categoryRouter  
  .get('/', isPaginated, Categories.getAll)
  .get('/:name', Categories.get)
  .delete('/:name', Categories.delete)
  .put('/:name', Categories.update)
  .post('/', Categories.add);
