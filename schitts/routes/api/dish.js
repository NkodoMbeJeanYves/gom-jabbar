const DishController = require('../../controllers/DishController')
// const asyncTryCatchMiddleware = require('./root').asyncTryCatchMiddleware
const router = require('express').Router()
const prefix = 'dish'

/**
 * @swagger
 * components:
 *  schemas:
 *    Dish:
 *      type: object
 *      required:
 *        - name
 *        - description
 *        - reference
 *        - price
 *        - last_preparation_date
 *        - conservation_time
 *        - active
 *      properties:
 *        id:
 *          type: integer
 *          description: The auto-generated id of the dish
 *        name:
 *          type: string
 *          description: The dish's name
 *        description:
 *          type: string
 *          description: the dish's description
 *        reference:
 *          type: string
 *          description: the reference of the dish
 *        price:
 *          type: string
 *          description: the dish's price
 *        last_preparation_date:
 *          type: string
 *          description: the last preparation date of dish
 *        conservation_time:
 *          type: string
 *          description: the duration to conserve dish at freeze
 *        active:
 *          type: string
 *          description: the dish availability
 *      example:
 *        name: cheeseburgers
 *        description: These mini cheeseburgers are served on a fresh baked pretzel bun with lettuce, tomato, avocado, and your choice of cheese.
 *        price: 10.52
 *        conservation_time: 120
 *        last_preparation_date: "2021-02-29"
 *        active: '1'
 */

/**
 * @swagger
 * tags:
 *  name: Dish
 *  description: The dish managing APi
 */

/**
 * @swagger
 * /api/v1/dish?page=:
 *  get:
 *    summary: returns the dishes's list
 *    tags: [Dish]
 *    parameters:
 *      - in: query
 *        name: page
 *        schema:
 *          type: integer
 *        required: false
 *        description: the pagination page
 *    responses:
 *      200:
 *        description: the dishes's list
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Dish'
 */
router.get(`/${prefix}`, DishController.index)

/**
 * @swagger
 * /api/v1/dish:
 *  post:
 *    summary: store a new dish
 *    tags: [Dish]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Dish'
 *    responses:
 *      200:
 *        description: the new dish
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Dish'
 *      500:
 *        description: Server Error
 */
router.post(`/${prefix}`, DishController.store)

/**
  * @swagger
  * /api/v1/dish/{reference}:
  *  get:
  *    summary: get the dish by reference
  *    tags: [Dish]
  *    parameters:
  *      - in: path
  *        name: reference
  *        schema:
  *          type: string
  *        required: true
  *        description: the dish reference
  *    responses:
  *      200:
  *        description: fetch dish by reference
  *        contens:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/Dish'
  *      404:
  *        description: The dish was not found
  */
router.get(`/${prefix}/:reference`, DishController.edit)

/**
  * @swagger
  * /api/v1/dish/{reference}:
  *  patch:
  *    summary: update the dish by reference
  *    tags: [Dish]
  *    parameters:
  *      - in: path
  *        name: reference
  *        schema:
  *          type: string
  *        required: true
  *        description: the dish reference
  *    requestBody:
  *      required: true
  *      content:
  *        application/json:
  *          schema:
  *            $ref: '#/components/schemas/Dish'
  *    responses:
  *      200:
  *        description: The updated dish
  *        contens:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/Dish'
  *      404:
  *        description: The dish was not found
  */
router.patch(`/${prefix}/:reference`, DishController.update)

/**
  * @swagger
  * /api/v1/dish/{reference}:
  *  delete:
  *    summary: delete the dish by reference
  *    tags: [Dish]
  *    parameters:
  *      - in: path
  *        name: reference
  *        schema:
  *          type: string
  *        required: true
  *        description: the dish reference
  *    responses:
  *      200:
  *        description: the dish description by reference
  *        contens:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/Dish'
  *      404:
  *        description: The dish was not found
  */
router.delete(`/${prefix}/:reference`, DishController.destroy)

module.exports = router
