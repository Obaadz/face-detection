import express from "express";
import FaceController from "../../controllers/faceController";
import { jwtAuthExpress } from "../../middleware/jwtAuth";

const facesRoutes = express.Router();

facesRoutes.post("/faces", FaceController.create);
facesRoutes.get("/faces", FaceController.detect);

export default facesRoutes;
