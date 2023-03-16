import { ERROR_MESSAGES } from "../types/enums";
import type { IFaceDocument, Face } from "../types/face";
import FaceModel from "../models/face";
import { FilterQuery, UpdateQuery } from "mongoose";

export async function findFace(
  query: FilterQuery<IFaceDocument>,
  selectedItems?: string | string[]
) {
  const dbFace: IFaceDocument | null = await FaceModel.findOne(query).select(
    selectedItems ? selectedItems : undefined
  );

  if (!dbFace) throw new Error(ERROR_MESSAGES.INCORRECT_EMAIL);

  return dbFace;
}

export async function insertFace(face: Face) {
  const dbFace: IFaceDocument = new FaceModel<Face>({
    ...face,
  });

  await dbFace.save();

  return findFace({ _id: dbFace._id });
}

export async function updateFace(
  query: FilterQuery<IFaceDocument>,
  update: UpdateQuery<IFaceDocument>
) {
  await FaceModel.updateOne(query, update);
}

export async function deleteFace(query: FilterQuery<IFaceDocument>) {
  await FaceModel.deleteOne(query);
}
