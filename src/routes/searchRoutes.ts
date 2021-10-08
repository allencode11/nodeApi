import express from 'express';
import { Search } from '../controllers';

const router = express.Router();

router.route('/search')
    .get(Search.getSkills)
    .delete(Search.deleteSkill)
    .patch(Search.editSkill)
    .post(Search.addSkills);

export default router;
