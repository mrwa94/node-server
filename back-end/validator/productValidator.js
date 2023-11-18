import { check } from "express-validator";

export const productValidator = [
    check('id').isNumeric().withMessage('product id must be number'),
];