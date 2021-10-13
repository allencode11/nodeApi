import { Request } from 'express';

export type PaginatedRequest = Request & {
    query: {
        limit: number;
        offset: number;
    },
};

export type Params = {
    limit: number;
    offset: number;
  };

export type RequestParam = Request  & {
    params : { id: number; };
}