import { NextFunction, Request, Response } from "express";
import Joi from "joi";

// add schema for person
const PersonSchema = Joi.object({
    name: Joi.string().required(),
    dob: Joi.date().required().max(new Date())
})

// create schema for age comparation
const ageSchema = Joi.object({
    firstPerson: PersonSchema,
    secondPerson: PersonSchema,
})

// create function to validate person
const validationAge = (
    req: Request, res: Response, next: NextFunction
) => {
    const validation = ageSchema.validate(req.body)
    if (validation.error) {
        return res.status(400).json({ message: validation.error.details.map(item => item.message).join() })
    }
    return next()
}

export { validationAge }