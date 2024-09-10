import { Router } from "express";
import { countAverage } from "../controller/anbkController";
import { validateAnbk } from "../middleware/validateANBK";

const router = Router()
router.post(`/average`, [validateAnbk], countAverage)
export default router