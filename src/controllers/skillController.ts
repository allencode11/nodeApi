import { Request, Response } from 'express';
import { PaginatedRequest, RequestParam } from '../types';
import { Skill } from '../repositories';

export class Skills {
    public static async find(req: Request, res: Response): Promise<Response> {
       return res.json( await Skill.getIdByName([req.params.name]));
    }

    /**
     * @api {get} /skill Return all skills from the database
     * @apiName get
     * @apiGroup Skill
     *
     * @apiParam {number} limit The number of items for paginations (params).
     * @apiParam {number} offset Page for json (params).
     *
     * @apiSuccessExample Success-Response:
     {
    "total": 8,
    "data": [
        {
            "id": 1,
            "name": "Java",
            "categoryId": 0,
            "createdAt": null,
            "updatedAt": null,
            "category.id": null,
            "category.name": null,
            "users.id": 1,
            "users.firstName": "Admin",
            "users.lastName": "Admin",
            "users.email": "admin@gmail.com",
            "users.description": "null",
            "users.avatar": "user/avatar",
            "users.createdAt": null,
            "users.updatedAt": null
        },
        {
            "id": 2,
            "name": "NodeJs",
            "categoryId": 1,
            "createdAt": null,
            "updatedAt": null,
            "category.id": 1,
            "category.name": "Languages",
            "users.id": 2,
            "users.firstName": "Alina",
            "users.lastName": "Enache",
            "users.email": "al.el.en.lina@gmail.com",
            "users.description": "client",
            "users.avatar": "user/avatar1",
            "users.createdAt": null,
            "users.updatedAt": null
        },
        {
            "id": 3,
            "name": "EntityFramework",
            "categoryId": 2,
            "createdAt": null,
            "updatedAt": null,
            "category.id": 2,
            "category.name": "Technologies",
            "users.id": null,
            "users.firstName": null,
            "users.lastName": null,
            "users.email": null,
            "users.description": null,
            "users.avatar": null,
            "users.createdAt": null,
            "users.updatedAt": null
        },
        {
            "id": 4,
            "name": "English",
            "categoryId": 3,
            "createdAt": null,
            "updatedAt": null,
            "category.id": 3,
            "category.name": "Frameworks",
            "users.id": null,
            "users.firstName": null,
            "users.lastName": null,
            "users.email": null,
            "users.description": null,
            "users.avatar": null,
            "users.createdAt": null,
            "users.updatedAt": null
        },
        {
            "id": 5,
            "name": "JavaScript",
            "categoryId": 0,
            "createdAt": null,
            "updatedAt": null,
            "category.id": null,
            "category.name": null,
            "users.id": null,
            "users.firstName": null,
            "users.lastName": null,
            "users.email": null,
            "users.description": null,
            "users.avatar": null,
            "users.createdAt": null,
            "users.updatedAt": null
        },
        {
            "id": 6,
            "name": "nestjs",
            "categoryId": 3,
            "createdAt": "2021-10-17T19:11:50.000Z",
            "updatedAt": "2021-10-17T19:11:50.000Z",
            "category.id": 3,
            "category.name": "Frameworks",
            "users.id": null,
            "users.firstName": null,
            "users.lastName": null,
            "users.email": null,
            "users.description": null,
            "users.avatar": null,
            "users.createdAt": null,
            "users.updatedAt": null
        },
        {
            "id": 7,
            "name": "nextjs",
            "categoryId": 3,
            "createdAt": "2021-10-17T19:13:32.000Z",
            "updatedAt": "2021-10-17T19:13:32.000Z",
            "category.id": 3,
            "category.name": "Frameworks",
            "users.id": null,
            "users.firstName": null,
            "users.lastName": null,
            "users.email": null,
            "users.description": null,
            "users.avatar": null,
            "users.createdAt": null,
            "users.updatedAt": null
        },
        {
            "id": 8,
            "name": "nestjs",
            "categoryId": 3,
            "createdAt": "2021-10-17T19:13:32.000Z",
            "updatedAt": "2021-10-17T19:13:32.000Z",
            "category.id": 3,
            "category.name": "Frameworks",
            "users.id": null,
            "users.firstName": null,
            "users.lastName": null,
            "users.email": null,
            "users.description": null,
            "users.avatar": null,
            "users.createdAt": null,
            "users.updatedAt": null
        }
    ],
    "limit": 10,
    "offset": 0
}
     * @apiError BadRequest Wrong input data.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 BadRequest
     *     {
     *           "message": "Bad request"
     *     }
     */

    public static async get(req: PaginatedRequest, res: Response): Promise<Response> {
        try {

            const { limit, offset } = req.query;

            const {rows, count} = await Skill.getAllPaginated({ limit, offset });

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

    public static async post(req: Request, res: Response): Promise<Response> {
        return res.json( await Skill.addSkill(req.body)); 
    };

    /**
     * @api {delete} /category Delete a skill from the db
     * @apiName delete
     * @apiGroup Skills
     *
     * @apiParam {string} name the name of the skill to delete (body).
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 BadRequest
     *     {
     *           "message": "Skill was deleted"
     *   }
     *
     * @apiError Bad Request Wrong input data.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 BadRequest
     *     {
     *           "message": "Bad request"
     *   }
     */

    public static async delete(req: RequestParam, res: Response): Promise<Response> {
        try {
            console.log(req.body);
            await Skill.deleteSkill(req.params.id, req.body.skillId);
            return res.status(200).json({ message: 'Item was deleted sucessfully'});
        } catch (e) {
            console.log(e);
            return res.status(200).json({ message: 'Item was not deleted sucessfully'});
        }
    };

    public static async search(req: Request, res: Response): Promise<Response> {
        await Skill.searchUsersBySkills(req.body);
        return res.status(200).json({ message: 'Item was deleted sucessfully'});
    };
};