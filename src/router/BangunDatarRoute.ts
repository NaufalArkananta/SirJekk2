import { Router } from "express";
import { areaTriangel, circleArea, rectangleArea } from "../controller/BangunDatarController";
import { validateCircle, validateRectangle, validateTriangle } from "../middleware/validateShape";

const route = Router();

// Define routes for luas lingkaran
route.get(`/circle/`, [validateCircle], circleArea);

//Define routes for area triangle
route.get(`/triangle`, [validateTriangle], areaTriangel);

route.get(`/rectangle/:panjang/:lebar`, [validateRectangle], rectangleArea)

export default route;
