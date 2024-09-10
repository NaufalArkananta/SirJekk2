import { Request, Response } from "express";

type Nilai = {
    nama: string,
    nilaiLiterasi: number,
    nilaiNumerasi: number,
    nilaiRerata?: number
// ?artinya opsional
}

const countAverage = (req: Request, res: Response) => {
    try {
        // read request data
        const nilai: Nilai[] = req.body.nilai
        for (let i = 0; i < nilai.length; i++) {
            nilai[i].nilaiRerata = (nilai[i].nilaiLiterasi + nilai[i].nilaiNumerasi)/2
        }
        //  mapping array for select only "nama" and "nilaiRerata"
        const result = nilai.map(item => { 
            let {nama, nilaiRerata} = item
            return {nama, nilaiRerata}
        })
        return res.status(200).json(result) 
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

export { countAverage }