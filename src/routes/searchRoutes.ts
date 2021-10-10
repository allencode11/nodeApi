import express from 'express';
import { Search } from '../controllers';

export const searchRouter = express.Router();

searchRouter
  .get('/', Search.find)
  .get('/:id', Search.getSkills)
  .delete('/:id', Search.deleteSkill)
  .patch('/:id', Search.editSkill)
  .post('/:id', Search.addSkills);
