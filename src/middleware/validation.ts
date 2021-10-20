import { NextFunction, Response } from 'express';
import { RequestParam } from '../types';
import { User, Category, Skill } from '../repositories';


 export const validateEmail = async (req: RequestParam, res: Response, next: NextFunction) => {
    if (req.body.email === ''|| req.body.name === '') {
        return res.send(406).json({ message: 'BadRequest! Field can not be null!' });
    }
    next();
 };

 export const validateCategoryName= async (req: RequestParam, res: Response, next: NextFunction) => {
    if (req.body.name === '' || req.body.name === 'null') {
        return res.send(400).json({ message: 'BadRequest! Field can not be null!' });
    }
    next();
 };


 export const validateSkillName= async (req: RequestParam, res: Response, next: NextFunction) => {
    const skill: Skill[] = req.body;
    skill.forEach( async element => {
        if (element.name === '' || element.name === '') {
        return res.send(400).json({ message: 'Internal server error! Field can not be null!' });
        }
    });
    next();  
 };
