import { NextFunction, Response } from 'express';
import { RequestParam } from '../types';
import { User, Category, Skill } from '../repositories';

export const validateCategoryId = async (req: RequestParam, res: Response, next: NextFunction) => {
   if (await Category.get(req.params.id)) {
        next();
   } else {
       res.send(500).json({ message: 'Internal server error! Incorect id!' });
   }
};

export const validateUserId = async (req: RequestParam, res: Response, next: NextFunction) => {
    if (await User.getUser(req.params.id)) {
         next();
    } else {
        res.send(500).json({ message: 'Internal server error! Incorect id!' });
    }
 };

 export const validateSkillId = async (req: RequestParam, res: Response, next: NextFunction) => {
    if (await Skill.get(req.params.id)) {
         next();
    } else {
        res.send(500).json({ message: 'Internal server error! Incorect id!' });
    }
 };

 export const validateEmail = async (req: RequestParam, res: Response, next: NextFunction) => {
    if (req.body.email === ''|| req.body.name === '') {
        return res.send(400).json({ message: 'BadRequest! Field can not be null!' });
    }
    if (await User.findOne({ where: { email: req.body.email }})) {
        return res.send(500).json({ message: 'Internal server error! An user with this email already exist!' });
    } else {
        next()
    }
 };

 export const validateCategoryName= async (req: RequestParam, res: Response, next: NextFunction) => {
    if (req.body.name === '' || req.body.name === 'null') {
        return res.send(400).json({ message: 'BadRequest! Field can not be null!' });
    }
    if (await Category.findOne({ where: { name: req.body.name }})) {
        res.send(500).json({ message: 'BadRequest! A category with this name already exist!' });
    } else {
        next()
   }
 };


 export const validateSkillName= async (req: RequestParam, res: Response, next: NextFunction) => {
    if (req.body.name === '' || req.body.name === '') {
        return res.send(400).json({ message: 'Internal server error! Field can not be null!' });
    }
    if (await Skill.findOne({ where: { name: req.body.name }})) {
        res.send(500).json({ message: 'Internal server error! A skill with this name already exist!' })
   } else {
        next();
   }
 };


 export const validateUserSkillId= async (req: RequestParam, res: Response, next: NextFunction) => {
    if (await Skill.get(req.body.id)) {
        next();
   } else {
       res.send(500).json({ message: 'Internal server error! A skill with this id does not exist!' });
   }
 };