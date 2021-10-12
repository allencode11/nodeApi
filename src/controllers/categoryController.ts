import { Request, Response } from 'express';
import { Category } from '../repositories/categoryRepository';
import { ICategoryData, ICategory } from '../types/models';

export class Categories {
    public static async getAll(req: Request, res: Response): Promise<any> {
        
        const response = await Category.getAll();

        return res.json(response);
    };

    public static async add(req: Request, res: Response): Promise<any> {
        await Category.post(req.body.name);
        return res.status(200).json({mesage: 'Item was added'});
    };

    public static async delete(req: Request, res: Response): Promise<any> {
        await Category.delete(req.body.name);
        return res.status(200).json({mesage: 'Item was deleted'});
    };

    public static async put(req: Request, res: Response): Promise<any> {

        const obj = await Category.get(req.params.name);
        await Category.put(req.body.name, obj.id );
        return res.status(200).json({mesage: 'Item was updated'});
    };
}
