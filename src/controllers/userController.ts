import { Request, Response } from 'express';
import { UserSkills, User, Skill } from '../repositories';
import { IUserData, PaginatedRequest, RequestParam } from '../types';

export class Users {
    /**
     * @api {get} /user Get all users from the database
     * @apiName getAll
     * @apiGroup Users
     *
     * @apiParam {number} limit The number of items for paginations (param).
     * @apiParam {number} offset Page for json (param).
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
            console.log(e);
            return res.status(400).json({ message: 'Bad request' });
        };
    };

    /**
     * @api {get} /user/:id Get all user's data from the database
     * @apiName get
     * @apiGroup Users
     *
     * @apiSuccessExample Success-Response:
     * {
     * "count": 1,
     * "rows": [
     *    {
     *       "id": 1,
     *       "name": "Java",
     *       "categoryId": 0,
     *       "createdAt": null,
     *       "updatedAt": null,
     *       "users.id": 1,
     *       "users.firstName": "Admin",
     *       "users.lastName": "Admin",
     *       "users.email": "admin@gmail.com",
     *       "users.description": "null",
     *       "users.avatar": "user/avatar",
     *       "users.createdAt": null,
     *       "users.updatedAt": null,
     *       "category.id": null,
     *       "category.name": null,
     *       "category.createdAt": null,
     *       "category.updatedAt": null
     *   }
     *  ]
     * }
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
            const skills = await User.getUserSkills(req.params.id);
            const user= await User.getUser(req.params.id);

            if(user) {
                const responseData: IUserData = {
                    firstName: user.firstName,
                    email: user.email,
                    lastName:user.lastName,
                    description: user.description,
                    avatar: user.avatar,
                    skills: [],
                }

                skills.forEach( element => {
                    responseData.skills.push(element);
                })
                return res.json({ responseData });
            } else {
                return res.json({ message: 'User was not found!'})
            }; 
        } catch (e) {
            console.log(e);
            return res.json({ message: 'Bad request' });
        }
        
    };

    /**
     * @api {post} /user Add a new  categoriy to the database
     * @apiName post
     * @apiGroup Users
     *
     * @apiParam {string} firstName User's first name.
     * @apiParam {string} lastName User's last name.
     * @apiParam {string} email  User's email.
     * @apiParam {string} description  A short section about the User.
     * @apiParam {avatar} avatar  Path for the User's photo.
     * 
     * @apiSuccessExample Success-Response:
     *    
     * {
     *     "message": "user was created"
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
    public static async post(req: Request, res: Response): Promise<Response> {
        try {
            const user = await User.getUser(req.body.name);
            if(!user) {
                await User.addUser(req.body);
                return res.status(200).json({message: 'User was added'});
            } else {
                return res.status(400).json({message: 'User with this email already exist'});
            }
        } catch (e) {
            return res.status(400).json({ message: 'Bad request'})
        }
    };

    /**
     * @api {delete} /user/:id Delete an user from the database.
     * @apiName delete
     * @apiGroup Users
     *
     * 
     * @apiSuccessExample Success-Response:
     *    
     * {
     *     "message": "user was deleted"
     * }
     *
     * @apiError NotFound Wrong input data.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 NotFound
     *     {
     *           "message": "User does not exist"
     *   }
     */
    public static async delete(req: RequestParam, res: Response): Promise<Response> {
        if (await User.getUser(req.params.id)) {
            await User.deleteUser(req.params.id);
            return res.status(200).json({ message: 'User was deleted'});
        } else {
            return res.status(404).json({ message: 'User does not exist'});
        }
    };

    /**
     * @api {put} /user/:id Update an user
     * @apiName put
     * @apiGroup Users
     * 
     * @apiParam {string} firstName User's new first name.
     * @apiParam {string} lastName User's new last name.
     * @apiParam {string} email  User's new email.
     * @apiParam {string} description  A new short section about the User.
     * @apiParam {avatar} avatar  New path for the User's photo.
     * 
     * @apiSuccessExample Success-Response:
     *    
     * {
     *     "message": "user was edited succesfully"
     * }
     *
     * @apiError NotFound Wrong input data.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 BadRequest
     *     {
     *           "message": "Bad request
     *   }
     */
    public static async put(req: RequestParam, res: Response): Promise<Response> {
        if (await User.getUser(req.params.id)) {
            try {
                await User.editUser(req.body, req.params.id);
                return res.status(200).json({message: 'user was edited sucessfully'});
            } catch (e) {
                return res.send(400).json({ message: 'bed request'});
            }
        } else {
            return res.status(404).json({ message: 'User does not exist'});
        }
    };
};