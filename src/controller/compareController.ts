import { Request, Response } from "express";

type Person = {
    name: string, dob: string;
}

// membandingkan 2 umur berdasarkan tanggal lahir
const ageComparation = (req: Request, res: Response) => {
    try {
        const firstPerson: Person = req.body.firstPerson;
        const secondPerson: Person = req.body.secondPerson;

        const firstDob: Date = new Date(firstPerson.dob);
        const secondDob: Date = new Date(secondPerson.dob);
        let message = ``
        if(firstDob.getTime() > secondDob.getTime()) {
            message = `${secondPerson.name} lebih tua dari ${firstPerson.name}`;
        } else if(firstDob.getTime() < secondDob.getTime()) {
            message = `${firstPerson.name} lebih tua dari ${secondPerson.name}`;
        } else {
            message = `${firstPerson.name} dan ${secondPerson.name} memiliki umur yang sama`;
        }
        return res.status(200)
            .json({ message});
    } catch (error) {
        return res.status(500)
            .json({ message: error});
    }
}

export {ageComparation};