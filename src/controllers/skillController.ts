import { Request, Response } from 'express';
import { Category, User, Skill } from '../repositories';

export class Skills {
    public static async find(req: Request, res: Response): Promise<any> {
        // const users = await User.getAllUsers();

        // const ids = users.map((user) => user.id);
        
        // const skillsId = await UserSkills.getSkillsByUserId(ids);

        // return res.json({
        //     ...users,
        //     skills: [...(await Skill.getAllByIds(skillsId))],
        // });
        throw new Error('Method not implemented yet'); 
    }

    public static async get(req: Request, res: Response): Promise<void> {
        throw new Error('Method not implemented yet'); 
    };

    public static async post(req: Request, res: Response): Promise<void> {
        throw new Error('Method not implemented yet'); 
    };

    public static async delete(req: Request, res: Response): Promise<void> {
        throw new Error('Method not implemented yet'); 
    };

    public static async put(req: Request, res: Response): Promise<void> {
        throw new Error('Method not implemented yet');
    };
};