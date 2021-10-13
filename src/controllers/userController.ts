import { Request, Response } from 'express';
import { UserSkills, User, Skill } from '../repositories';
import { PaginatedRequest, RequestParam } from '../types';

export class Users {
    public static async getAll(req: PaginatedRequest, res: Response): Promise<Response> {
        try {

            const { limit, offset } = req.query;

            const {rows, count} = await User.getAllPaginated({ limit, offset });

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

    public static async get(req: RequestParam, res: Response): Promise<Response> {
        const user = await User.getUser(req.params.id);
        const skillsIds = await UserSkills.getSkillsByUserId(req.params.id);
        const skills: string[] = [];

        skillsIds.forEach(async (element) => {
            const temp = await Skill.findByPk(element);
            skills.push(temp.name);
        });

        return res.json({
            userdata: user,
            userSkills: skills,
        });
    };

    public static async post(req: Request, res: Response): Promise<Response> {
        await User.addUser(req.body);
        return res.status(200).json({message: 'user was created'});
    };

    public static async delete(req: RequestParam, res: Response): Promise<void> {
        await User.deleteUser(req.params.id);
        return res.status(200).end();
    };

    public static async put(req: RequestParam, res: Response): Promise<void> {
        await User.editUser(req.body, req.params.id);
        return res.status(200).end();
    };
};