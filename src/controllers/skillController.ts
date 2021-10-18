import { Request, Response } from 'express';
import { PaginatedRequest, RequestParam } from '../types';
import { Skill } from '../repositories';

export class Skills {

    /**
     * @api {get} /skill/:id Return a skills from the database
     * @apiName find
     * @apiGroup Skill
     *
     * @apiSuccessExample Success-Response:
     * 
     * {
     *   "count": 1,
     *   "rows": [
     *     {
     *       "id": 3,
     *       "name": "EntityFramework",
     *       "categoryId": 2,
     *       "createdAt": null,
     *       "updatedAt": null,
     *       "users.id": null,
     *       "users.firstName": null,
     *       "users.lastName": null,
     *       "users.email": null,
     *       "users.description": null,
     *       "users.avatar": null,
     *       "users.createdAt": null,
     *       "users.updatedAt": null,
     *       "category.id": 2,
     *       "category.name": "Technologies",
     *       "category.createdAt": null,
     *       "category.updatedAt": null
     *     }
     *   ]
     * }
     */
    public static async find(req: RequestParam, res: Response): Promise<Response> {
       return res.json( await Skill.get(req.params.id));
    }

    public static async getIdByName(req: RequestParam, res: Response): Promise<Response> {
        return res.json( await Skill.getIdByName(req.params.name));
     }

    /**
     * @api {get} /skill Return all skills from the database
     * @apiName getAll
     * @apiGroup Skill
     *
     * @apiParam {number} limit The number of items for paginations (params).
     * @apiParam {number} offset Page for json (params).
     *
     * @apiSuccessExample Success-Response:
     * {
     *   "total": 2,
     *   "data": [
     *           {
     *             "id": 1,
     *             "name": "Java",
     *             "categoryId": 0,
     *             "createdAt": null,
     *             "updatedAt": null,
     *             "category.id": null,
     *             "category.name": null,
     *             "users.id": 1,
     *             "users.firstName": "Admin",
     *             "users.lastName": "Admin",
     *             "users.email": "admin@gmail.com",
     *             "users.description": "null",
     *             "users.avatar": "user/avatar",
     *             "users.createdAt": null,
     *             "users.updatedAt": null
     *           },
     *           {
     *              "id": 2,
     *              "name": "NodeJs",
     *              "categoryId": 1,
     *              "createdAt": null,
     *              "updatedAt": null,
     *              "category.id": 1,
     *              "category.name": "Languages",
     *              "users.id": 2,
     *              "users.firstName": "Alina",
     *              "users.lastName": "Enache",
     *              "users.email": "al.el.en.lina@gmail.com",
     *              "users.description": "client",
     *              "users.avatar": "user/avatar1",
     *              "users.createdAt": null,
     *              "users.updatedAt": null
     *            }
     *          ],
     *          "limit": 10,
     *          "offset": 0
     *         }
     * @apiError BadRequest Wrong input data.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 BadRequest
     *     {
     *           "message": "Bad request"
     *     }
     */
    public static async getAll(req: PaginatedRequest, res: Response): Promise<Response> {
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

    /**
     * @api {post} /skill Add a category to the db
     * @apiName post
     * @apiGroup Skill
     *
     * @apiParam {string} name The name of the new skill.
     * @apiParam {number} categoryId The id of the category.
     * 
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 BadRequest
     *     {
     *           "message": "item was added"
     *     }
     *
     * @apiError BadRequest Wrong input data.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 BadRequest
     *     {
     *           "message": "Bad request"
     *   }
     */

    public static async post(req: Request, res: Response): Promise<Response> {
        try {
            await Skill.addSkill(req.body)
            return res.status(200).json({ message: 'Item was added'}); 
        } catch (e) {
            return res.status(404).json({ message: 'Bad request'});
        }
    };

    public static async postToUser(req: RequestParam, res: Response): Promise<Response> {
        try {
            await Skill.addSkillToUser(req.body.skillId, req.params.id);
            return res.status(200).json({ message: 'Item was added'}); 
        } catch (e) {
            return res.status(404).json({ message: 'Bad request'});
        }
    };

    /**
     * @api {delete} /skill/:id Delete a skill from an user
     * @apiName delete
     * @apiGroup Skills
     *
     * @apiParam {number} skillId The id of the skill to delete.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 BadRequest
     *     {
     *           "message": "Item was deleted sucessfully"
     *     }
     *
     * @apiError Bad Request Wrong input data.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 BadRequest
     *     {
     *           "message": "Error! Item was not deleted"
     *     }
     */
    public static async delete(req: RequestParam, res: Response): Promise<Response> {
        try {
            await Skill.deleteSkill(req.params.id, req.body.skillId);
            return res.status(200).json({ message: 'Item was deleted sucessfully'});
        } catch (e) {
            return res.status(400).json({ message: 'Error! Item was not deleted'});
        }
    };

    /**
     * @api {delete} /skill/admin/:id Delete a skill from database
     * @apiName deleteFromDb
     * @apiGroup Skills
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 BadRequest
     *     {
     *           "message": "Item was deleted sucessfully"
     *     }
     *
     * @apiError Bad Request Wrong input data.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 BadRequest
     *     {
     *           "message": "Error! Item was not deleted"
     *     }
     */
    public static async deleteFromDb(req: RequestParam, res: Response): Promise<Response> {
        const skill = Skill.get(req.params.id);

        if(skill) {
            await Skill.deleteSkillFromDb(req.params.id);
            return res.status(200).json({ message: 'Item was deleted sucessfully'});
        } else {
            return res.status(400).json({ message: 'Error! Item was not deleted'});
        }
    };


    // public static async edit(req: Request, res: Response): Promise<Response> {
    //     const obj = await Skill.get(req.params.name);
        
    //     if (obj) {
    //         await Skills.put(req.body.name, obj.id);
    //     return res.status(200).json({mesage: 'Item was updated'});
    //     } else {
    //         return res.status(404).json({
    //             message: 'Item was not found',
    //         });
    //     }
    // };

    // public static async search(req: Request, res: Response): Promise<Response> {
    //     await Skill.searchUsersBySkills(req.body);
    //     return res.status(200).json({ message: 'Item was deleted sucessfully'});
    // };
};