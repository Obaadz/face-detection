import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ERROR_MESSAGES } from "../types/enums";

export default class faceController {
  static async create(req: Request, res: Response) {
    const face = req.body.face;

    console.log(face);

    res.status(200).send({ face });
  }
  static async detect(req: Request, res: Response) {
    const face = req.body.face;

    console.log(face);

    res.status(200).send({ face });
  }
}
