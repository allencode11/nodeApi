import express from 'express';
import { isPaginated } from '../middleware';
import { Skills } from '../controllers';

export const skillRouter = express.Router();

skillRouter
  .get('/:id', Skills.find)
  .get('/admin/:name', Skills.getIdByName)
  .get('/', isPaginated, Skills.getAll)
  .delete('/:id', Skills.delete)
  .delete('/admin/:id', Skills.deleteFromDb)
  .post('/', Skills.post);
  //.put('/:id', Skills.edit);
