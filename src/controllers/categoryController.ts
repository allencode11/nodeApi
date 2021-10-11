import { Request, Response } from 'express';

export class Category {
    public static async getAll(req: Request, res: Response): Promise<void> {
        throw new Error('Method not implemented.');
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
