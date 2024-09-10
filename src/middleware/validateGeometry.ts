import { NextFunction,Request, Response } from "express";
import Joi from "joi";

//CREATE A SCHEMA/ RULE TO VALIDATE REQUEEST FOR TUBE

const tubeSchema = Joi.object({
    r: Joi.number().min(1).required(),
    // r harus berisi number dan min 1 dn harus diisi
    t: Joi.number().min(1).required()
})

// create function to vaalidate request
const validateTube = (req:Request, res:Response, next:NextFunction) => {
    const validation = tubeSchema.validate(req.body)
    if (validation.error) {
        //400: bad request
        return res.status(400).json({
            message: validation.error.details.map(item => item.message).join()
        })
    }
    return next()
    // if no error, then call next() to move to next middleware
    // or to the route handler
}

// CREATE A SCHEMA/RULE TO VALIDATE REQUEST FOR CONE

const coneSchema = Joi.object({
    r: Joi.number().min(1).required(),
    // r harus berisi number dan min 1 dn harus diisi
    t: Joi.number().min(1).required()
})

// create function to vaalidate request

const validateCone = (req:Request, res:Response, next:NextFunction) => {
    const validation = coneSchema.validate(req.body)
    if (validation.error) {
        //400: bad request
        return res.status(400).json({
            message: validation.error.details.map(item => item.message).join()
        })
    }
    return next()
    // if no error, then call next() to move to next middleware
    // or to the route handler
}

// CREATE A SCHEMA/RULE TO VALIDATE REQUEST FOR CUBE

const cubeSchema = Joi.object({
    s: Joi.number().min(1).required(),
    // s harus berisi number dan min 1 dn harus diisi
})

// create function to vaalidate request

const validateCube = (req:Request, res:Response, next:NextFunction) => {
    const validation = cubeSchema.validate(req.body)
    if (validation.error) {
        //400: bad request
        return res.status(400).json({
            message: validation.error.details.map(item => item.message).join()
        })
    }
    return next()
    // if no error, then call next() to move to next middleware
    // or to the route handler
}

// CREATE A SCHEMA/RULE TO VALIDATE REQUEST FOR BALL

const ballSchema = Joi.object({
    r: Joi.number().min(1).required(),
    // r harus berisi number dan min 1 dn harus diisi
})

// create function to vaalidate request

const validateBall = (req:Request, res:Response, next:NextFunction) => {
    const validation = ballSchema.validate(req.body)
    if (validation.error) {
        //400: bad request
        return res.status(400).json({
            message: validation.error.details.map(item => item.message).join()
        })
    }
    return next()
    // if no error, then call next() to move to next middleware
    // or to the route handler
}

export { validateTube, validateCone, validateCube, validateBall } 