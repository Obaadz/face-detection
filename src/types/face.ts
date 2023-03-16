import { JwtPayload } from "jsonwebtoken";
import { Document, Types } from "mongoose";

export type Face = {};

export interface IFaceDocument extends Document, Face {}
