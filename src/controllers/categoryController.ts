import { Request, Response } from 'express';
import { Category } from '../repositories';
import { ICategoryData } from '../types/models';

export class Categories {
    public static async getAll(req: Request, res: Response): Promise<any> {
        
        const response = await Category.getAll();

        return res.json(response);
    };
    public static async getAllCategories() {
        throw new Error('Method not implemented.');
    };

    public static async add(req: Request, res: Response): Promise<void> {
        throw new Error('Method not implemented.');
    };

    public static async delete(req: Request, res: Response): Promise<void> {
        throw new Error('Method not implemented.');
    };

    public static async put(req: Request, res: Response): Promise<void> {
        throw new Error('Method not implemented.');
    };
}
