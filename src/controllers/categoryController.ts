import { Request, Response } from 'express';
import { PaginatedRequest } from '../types';
import { Category } from '../repositories/categoryRepository';

export class Categories {
    public static async getAll(req: PaginatedRequest, res: Response): Promise<any> {
        try {

            const { limit, offset } = req.query;

            const {rows, count} = await Category.getAllPaginated({ limit, offset });

            return res.status(200).json({
                total: count,
                data: rows,
                limit,
                offset,
            });
        }
        catch (e) {
            return res.status(400).json({
                message: 'Bad request',
            });
        };
    };


    public static async get(req: Request, res: Response): Promise<any> {
        try {

            const item = await Category.get(req.params.name);

            return res.status(200).json({
                item,
            });
        }
        catch (e) {
            return res.status(400).json({
                message: 'Bad request',
            });
        };
    };

    public static async add(req: Request, res: Response): Promise<any> {
        try {
            await Category.post(req.body.name);
            return res.status(200).end();
        } catch (e) {
            return res.status(400).json({
                message: 'Bad request',
            });
        };
    };

    public static async delete(req: Request, res: Response): Promise<any> {
        try {
            await Category.delete(req.body.name);
            return res.status(200);
        } catch (e) {
            return res.status(400).json({
                message: 'Bad request',
            });
        };
    };

    public static async put(req: Request, res: Response): Promise<any> {

        try {
            const obj = await Category.get(req.params.name);
            await Category.put(req.body.name, obj.id );
            return res.status(200).json({mesage: 'Item was updated'});
        } catch (e) {
            return res.status(400).json({
                message: 'Bad request',
            });
        };
    };
}
