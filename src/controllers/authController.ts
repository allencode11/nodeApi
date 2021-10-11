import { Request, Response } from 'express';

export class Auth {
    public static async register(req: Request, res: Response): Promise<void> {
        throw new Error('Method not implemented yet'); 
    };

    public static async login(req: Request, res: Response): Promise<void> {
        throw new Error('Method not implemented yet'); 
    };

    public static async logout(req: Request, res: Response): Promise<void> {
        throw new Error('Method not implemented yet'); 
    }
}
