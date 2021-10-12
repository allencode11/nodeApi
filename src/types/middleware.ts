import { Request } from 'express';

export type PaginatedRequest = Request & {
    query: {
        limit: number;
        offset: number;
    },
};