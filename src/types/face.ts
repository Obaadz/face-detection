import { JwtPayload } from "jsonwebtoken";
import { Document, Types } from "mongoose";

export type Face = {
  x: number;
  y: number;
  z: number;
  leftEye: { x: number; y: number };
  rightEye: { x: number; y: number };
};

export interface IFaceDocument extends Document, Face {}
