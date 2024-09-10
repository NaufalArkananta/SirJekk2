import Express, { Router } from "express";
import { tubeVolume, coneVolume, cubeVolume, ballVolume  } from "../controller/bangunRuangController";
import { validateTube, validateCone, validateCube, validateBall } from "../middleware/validateGeometry";

const router = Router()

//allow to read body with JSON type
router.use(Express.json())

// Define routes for luas lingkaran
router.post(`/tube`,[validateTube], tubeVolume);

router.post(`/cone`, [validateCone], coneVolume);

router.post(`/cube`, [validateCube], cubeVolume);

router.post(`/ball`, [validateBall], ballVolume);


export default router;
