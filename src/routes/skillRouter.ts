import express from 'express';
import { Skills } from '../controllers';

export const skillRouter = express.Router();

skillRouter
  .get('/:name', Skills.find)
  .get('/', Skills.get)
  .delete('/:id', Skills.delete)
  // .patch('/:id', Skills.put)
  .post('/:id', Skills.post);
