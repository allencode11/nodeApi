import express from 'express';
import { Auth } from '../controllers';

export const authRouter = express.Router();

authRouter
  .get('login', Auth.login)
  .get('register', Auth.register)
  .get('logout', Auth.logout);
