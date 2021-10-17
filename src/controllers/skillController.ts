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
     *   {
     *     "total": 5,
     *     "data": [ 
     *     {
     *        "id": 1,
     *        "name": "Java",
     *        "categoryId": 0,
     *        "createdAt": null,
     *        "updatedAt": null,
     *        "category.id": null,
     *        "category.name": null
     *     },
     *     {
     *        "id": 2,
     *        "name": "NodeJs",
     *        "categoryId": 1,
     *        "createdAt": null,
     *        "updatedAt": null,
     *        "category.id": null,
     *        "category.name": null
     *     },
     *     {
     *        "id": 3,
     *        "name": "EntityFramework",
     *        "categoryId": 2,
     *        "createdAt": null,
     *        "updatedAt": null,
     *        "category.id": null,
     *        "category.name": null
     *     },
     *     {
     *        "id": 4,
     *        "name": "JavaScript",
     *        "categoryId": 0,
     *        "createdAt": null,
     *        "updatedAt": null,
     *        "category.id": null,
     *        "category.name": null
     *     },
     *     {
     *        "id": 5,
     *        "name": "JavaScript",
     *        "categoryId": 0,
     *        "createdAt": null,
     *        "updatedAt": null,
     *        "category.id": null,
     *        "category.name": null
     *      }
     *    ],
     *    "limit": 10,
     *    "offset": 0
     *  }
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
            console.log(e);
            return res.status(400).json({
                message: 'Bad request',
            });
        };
    };

    public static async post(req: Request, res: Response): Promise<Response> {
        console.log(req.body);
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
        await Skill.deleteSkill(req.params.id, req.body.id);
        return res.status(200).json({ message: 'Item was deleted sucessfully'});
    };

    public static async search(req: Request, res: Response): Promise<Response> {
        await Skill.searchUsersBySkills(req.body);
        return res.status(200).json({ message: 'Item was deleted sucessfully'});
    };
};