import { Request, Response } from 'express';
import { PaginatedRequest } from '../types';
import { Category } from '../repositories/categoryRepository';

export class Categories {

    /**
     * @api {get} /category Return all categories from the database
     * @apiName getAll
     * @apiGroup Category
     *
     * @apiParam {number} limit The number of items for paginations.
     * @apiParam {number} offset Page for json.
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

    public static async getAll(req: PaginatedRequest, res: Response): Promise<Response> {
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

    
    public static async get(req: Request, res: Response): Promise<Response> {
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

    /**
     * @api {post} /category Add a new category to the db
     * @apiName add
     * @apiGroup Category
     *
     * @apiParam {string} the name of the new category (body).
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 BadRequest
     *     {
     *           "message": "Category was added"
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

    public static async add(req: Request, res: Response): Promise<Response> {
        try {
            await Category.post(req.body.name);
            return res.status(200).json({ message: 'Category was added'});
        } catch (e) {
            return res.status(400).json({
                message: 'Bad request',
            });
        };
    };

    /**
     * @api {delete} /category Delete a category from the db
     * @apiName delete
     * @apiGroup Category
     *
     * @apiParam {string} the name of the new category (body).
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 BadRequest
     *     {
     *           "message": "Category was deleted"
     *   }
     *
     * @apiError Bad Request Wrong input data.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 NotFound
     *     {
     *           "message": "Item does not exist"
     *   }
     */

    public static async delete(req: Request, res: Response): Promise<Response> {
        console.log(req.params);
        if (Category.findAll({ where: {name: req.params.name}})) {
            console.log(req.params);
            await Category.delete(req.params.name);
            return res.status(200).json({ messaege: 'Category was deleted'});
        } else {
            return res.status(404).json({ message: 'Item does not exist'});
        }
    };

    /**
     * @api {put} /category/:name Add a new category to the db
     * @apiName put
     * @apiGroup Category
     *
     * @apiParam {string} the name of the new category.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 BadRequest
     *     {
     *           "message": "Item was updated"
     *   }
     *
     * @apiError Bad Request Wrong input data.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 BadRequest
     *     {
     *           "message": "Bad request"
     *   }
     * @apiError Not Found Wrong input data.
     * HTTP/1.1 404 NotFound
     *     {
     *           "message": "Item was not found"
     *   }
     */

    public static async update(req: Request, res: Response): Promise<Response> {
        const obj = await Category.get(req.params.name);
        
        if (obj) {
            await Category.put(req.body.name, obj.id);
        return res.status(200).json({mesage: 'Item was updated'});
        } else {
            return res.status(404).json({
                message: 'Item was not found',
            });
        }

        return res.status(400).json({
            message: 'Bad request',
        });
    };
}
