import express, { NextFunction } from 'express';
import { Categories } from '../controllers';

export const categoryRouter = express.Router();

categoryRouter  
  .get('/', Categories.getAll)
  .get('/:name', Categories.get)
  .delete('/:name', Categories.delete)
  .patch('/:name', Categories.put)
  .post('/', Categories.add);
