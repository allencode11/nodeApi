import express, { Request, Response } from 'express';
import passport from 'passport';

export const authRouter = express.Router();

authRouter
  .get('/login', passport.authenticate('google', { scope: ['email', 'profile'] }))
  .get('/login/token', (req: Request, res: Response) => {
    console.log(req.query);
    const { code } = req.query;
  })
  .get('/logout');
