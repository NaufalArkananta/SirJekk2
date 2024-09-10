import {Request, Response } from "express"

//  create a function to count area of circle

const circleArea = (req: Request, res:Response) => {
    try {
        //Asuume that data sent at quary URL
        const r: number = Number(req.query.r)
        // NUMBER FOR CONVERT TO NUMERICC VALUE
        const luas = Math.PI * r * r
        // STATUS 200 SUCCES
        return res 
            .status(200)
            .json({
                message: `Area of circle is ${luas}`, 
                luas: luas 
            })
        
    } catch (error) {
        return(
            res.status(500).json({
                message: 'Error calculating circle area',
                error: console.error()
                
            })
        )
    }
}

const areaTriangel = (req: Request, res: Response) => {
    try {
        // Assume data sent at query URL
        const alas: number = Number(req.query.alas)
        const tinggi: number = Number(req.query.tinggi)
        
        // Heron's formula for triangle area
        const luas = 0.5 * alas * tinggi
        
        // STATUS 200 SUCCESS
        return res 
            .status(200)
            .json({
                message: `Area of triangle is ${luas}`,
                area: luas
            })
        
    } catch (error) {
        return(
            res.status(500).json({
                message: 'Error calculating triangle area',
                error: console.error()
                
            })
        )}
}

const rectangleArea = (req: Request, res:Response) => {
    try {
        const panjang: number = Number(req.params.panjang)
        const lebar: number = Number(req.params.lebar)

        const luas = panjang*lebar

        res.status(200).json({
            message: `Area of rectangle is ${luas}`,
            area: luas
        })
    } catch (error) {
        return(
            res.status(500).json({
                message: 'Error calculating triangle area',
                error: console.error()
            })
        )
    }
}

export { circleArea, areaTriangel, rectangleArea }