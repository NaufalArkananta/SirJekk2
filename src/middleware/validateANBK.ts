import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const Nilai = Joi.object({
    nama: Joi.string().required(),
    nilaiLiterasi: Joi.number().min(0).max(100).required(),
    nilaiNumerasi: Joi.number().min(0).max(100).required(),
})

const schema = Joi.object({
    nilai: Joi.array().items(Nilai).min(1).required(),
})

const validateAnbk = (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body)
    if (validation.error) {
        return res.status(400).json({ message: validation.error.details.map(item => item.message).join() })
    }
    return next()
}

export { validateAnbk }