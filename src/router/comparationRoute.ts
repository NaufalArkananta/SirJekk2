import { Router } from "express";
import { ageComparation } from "../controller/compareController";
import { validationAge } from "../middleware/validateComparation";

const router = Router()
router.post(`/age`, [validationAge], ageComparation)

export default router