import express from 'express';
import { isPaginated, validateSkillId, validateUserSkillId, validateUserId, validateSkillName } from '../middleware';
import { Skills } from '../controllers';

export const skillRouter = express.Router();

skillRouter
  .get('/:id', validateSkillId, Skills.find)
  .get('/admin/:name', Skills.getIdByName)
  .get('/', isPaginated, Skills.getAll)
  .delete('/:id', validateSkillId, Skills.delete)
  .delete('/admin/:id', validateSkillId, Skills.deleteFromDb)
  .post('/', validateSkillName, Skills.post)
  .post('/:id', validateUserSkillId, validateUserId,  Skills.postToUser);
 // .put('/:id', Skills.edit);
