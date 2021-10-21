import { DEFAULT_LIMIT, MAX_LIMIT, MIN_LIMIT } from '../constants';
import { NextFunction, Response, Request } from 'express';
import { PaginatedRequest } from '../types';
import { setupPassport } from '../passport-setup';

setupPassport();

export const isPaginated = (req: PaginatedRequest, res: Response, next: NextFunction) => {
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