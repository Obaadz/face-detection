import mongoose, { Schema } from "mongoose";
import { IFaceDocument } from "../types/face";

export const faceSchema = new Schema({});

const Face = mongoose.models.faces || mongoose.model<IFaceDocument>("faces", faceSchema);

export default Face;
