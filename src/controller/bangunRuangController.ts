import { Request, Response } from "express"

const tubeVolume = (req: Request, res:Response) => {
    try {
        const r= Number(req.body.r)
        const t= Number(req.body.t)

        const volume = Math.PI*r*r*t
        return res.status(200).json({
            message: `Volume of Tube ${volume}`,
            volume
        })
    } catch (error) {
        return res.status(500).json
    }
}

const coneVolume = (req:Request, res: Response) => {
    try {
        const r= Number(req.body.r)
        const t= Number(req.body.t)
        
        const volume = (1/3)*Math.PI*r*r*t
        return res.status(200).json({
            message: `Volume of Cone ${volume}`,
            volume
        })
        
    } catch (error) {
        return res.status(500).json
    }
}

const cubeVolume = (req: Request, res: Response) => {
    try {
        const s= Number(req.body.s)
        
        const volume = s*s*s
        return res.status(200).json({
            message: `Volume of Cube ${volume}`,
            volume
        })
    } catch (error) {
        return res.status(500).json
    }
}

const ballVolume = (req: Request, res: Response) => {
    try {
        const r= Number(req.body.r)
        
        const volume = (4/3)*Math.PI*r*r*r
        return res.status(200).json({
            message: `Volume of Ball ${volume}`,
            volume
        })
    } catch (error) {
        return res.status(500).json
    }
}

export {tubeVolume, coneVolume, cubeVolume, ballVolume};