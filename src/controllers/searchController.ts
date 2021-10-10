import { Request, Response } from 'express';
import { Category } from '../repositories';

export class Search {
    public static async find(req: Request, res: Response): Promise<void> {
        console.log(await Category.getAll());
    }

    public static async getSkills(req: Request, res: Response): Promise<void> {

    };

    public static async addSkills(req: Request, res: Response): Promise<void> {

    };

    public static async deleteSkill(req: Request, res: Response): Promise<void> {

    };

    public static async editSkill(req: Request, res: Response): Promise<void> {

    };
};