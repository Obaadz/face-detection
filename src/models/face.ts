import mongoose, { Schema } from "mongoose";
import { IFaceDocument } from "../types/face";

export const faceSchema = new Schema({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  z: { type: Number, required: true },
  leftEye: { type: { x: Number, y: Number }, required: true },
  rightEye: { type: { x: Number, y: Number }, required: true },
});

const Face = mongoose.models.faces || mongoose.model<IFaceDocument>("faces", faceSchema);

export default Face;
