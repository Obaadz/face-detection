import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { insertFace } from "../services/face";
import { ERROR_MESSAGES } from "../types/enums";
import { Face } from "../types/face";

export default class faceController {
  static async create(req: Request, res: Response) {
    try {
      const face: Face = req.body.face;

      console.log("FACE_INPUT: ", face);

      const dbFace = await insertFace(face);

      console.log("DB_FACE: ", dbFace);

      res.status(201).send({ face });
    } catch (err: any) {
      res.status(400).send(err?.message || ERROR_MESSAGES.SERVER_ERROR);
    }
  }
  static async detect(req: Request, res: Response) {
    const face = req.body.face;

    res.status(200).send({ face });
  }
}
