import express from "express";
import facesRoutes from "./face";

const v1Routes = express.Router();

v1Routes.use("/v1", facesRoutes);

export default v1Routes;
