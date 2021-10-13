import { DEFAULT_LIMIT, MAX_LIMIT, MIN_LIMIT } from '../constants';
import express, { NextFunction, Response } from 'express';
import { PaginatedRequest } from 'types';
import { Categories } from '../controllers';


export const categoryRouter = express.Router();

const isPaginated = (req: PaginatedRequest, res: Response, next: NextFunction) => {
  const limit = Number(req.query.limit)
  const offset = Number(req.query.offset);

  req.query.limit = DEFAULT_LIMIT;
  req.query.offset = 0;

  if (limit >= MIN_LIMIT && limit <= MAX_LIMIT) {
    req.query.limit = limit;
  }

  if (offset) {
    req.query.offset = offset;
  }
  
  next();
}

categoryRouter  
  .get('/', isPaginated, Categories.getAll)
  .get('/:name', Categories.get)
  .delete('/:name', Categories.delete)
  .put('/:name', Categories.update)
  .post('/', Categories.add);
