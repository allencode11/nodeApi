import express from 'express';
import { Auth } from '../controllers';

const router = express.Router();


router.route('/login')
  .get(Auth.login)

router.route('/register')
  .get(Auth.register);

router.route('/logout')
  .get(Auth.logout);

export default router;