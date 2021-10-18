import express from 'express';
import { isPaginated } from '../middleware';
import { Skills } from '../controllers';

export const skillRouter = express.Router();

skillRouter
  .get('/:name', Skills.find)
  .get('/', isPaginated, Skills.get)
  .delete('/:id', Skills.delete)
  // .patch('/:id', Skills.put)
  .post('/', Skills.post);
