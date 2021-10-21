import express from 'express';
import { isPaginated, validateSkillName } from '../middleware';
import { Skills } from '../controllers';

export const skillRouter = express.Router();

skillRouter
  .get('/:id', Skills.find)
  .get('/', isPaginated, Skills.getAll)
  .delete('/:id', Skills.delete)
  .delete('/admin/:id', Skills.deleteFromDb)
  .post('/', validateSkillName, Skills.post)
  .post('/:id',  Skills.postToUser);
 // .put('/:id', Skills.edit);
