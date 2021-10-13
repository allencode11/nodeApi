import { Request, Response } from 'express';
import { UserSkills, User, Skill } from '../repositories';
import { PaginatedRequest, RequestParam } from '../types';

export class Users {
    /**
     * @api {get} /category Return all categories from the database
     * @apiName getAll
     * @apiGroup Users
     *
     * @apiParam {number} limit The number of items for paginations.
     * @apiParam {number} offset Page for json.
     *
     * @apiSuccessExample Success-Response:
     * {
     * "raw": true,
     * "total": 2,
     * "data": [
     *   {
     *       "id": 1,
     *       "firstName": "Admin",
     *       "lastName": "Admin",
     *       "email": "admin@gmail.com",
     *       "description": "null",
     *       "avatar": "user/avatar",
     *       "createdAt": null,
     *       "updatedAt": null
     *   },
     *   {
     *       "id": 2,
     *       "firstName": "Alina",
     *       "lastName": "Enache",
     *       "email": "al.el.en.lina@gmail.com",
     *       "description": "client",
     *       "avatar": "user/avatar1",
     *       "createdAt": null,
     *       "updatedAt": null
     *   }
     * ],
     * "limit": 10,
     *    "offset": 0
     * }
     *
     * @apiError Bad Request Wrong input data.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 BadRequest
     *     {
     *           "message": "Bad request"
     *   }
     */

    public static async getAll(req: PaginatedRequest, res: Response): Promise<Response> {
        try {

            const { limit, offset } = req.query;

            const {rows, count} = await User.getAllPaginated({ limit, offset });

            return res.status(200).json({
                raw: true,
                total: count,
                data: rows,
                limit,
                offset,
            });
        }
        catch (e) {
            console.error(e);
            return res.status(400).json({
                message: 'Bad request',
            });
        };
    };

    /**
     * @api {get} /category Return all categories from the database
     * @apiName get
     * @apiGroup Users
     *
     * @apiParam {number} limit The number of items for paginations.
     * @apiParam {number} offset Page for json.
     * @apiParam {number} :id User id.
     *
     * @apiSuccessExample Success-Response:
     *    [
     *      {
     *           "id": 1,
     *           "name": "Languages"
     *       },
     *       {
     *           "id": 2,
     *           "name": "Technologies"
     *       },
     *       {
     *           "id": 3,
     *           "name": "Frameworks"
     *       },
     *       {
     *           "id": 4,
     *           "name": "Others"
     *       }
     *   ]
     *
     * @apiError Bad Request Wrong input data.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 BadRequest
     *     {
     *           "message": "Bad request"
     *   }
     */

    public static async get(req: RequestParam, res: Response): Promise<Response> {
        try {
            const user = await User.getUser(req.params.id);
            console.log(user);
            const skillsIds = await UserSkills.getSkillsByUserId(req.params.id);
            console.log(skillsIds);
            const skills: string[] = [];

            skillsIds.forEach(async (element) => {
                const temp = await Skill.findByPk(element);
                skills.push(temp.name);
            });

            console.log(skills);

            return res.json({
                userdata: user,
                userSkills: skills,
            });
        } catch (e) {
            console.log(e);
        }
        
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