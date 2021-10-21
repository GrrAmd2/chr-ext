import { Schema } from "mongoose";

const wordSchema = new Schema({
  word: { type: String, unique: true, required: true },
  originalWord: { type: String, required: true },
  text: { type: String, required: true },
  textInfo: { type: String, default: "" },
  source: { type: String, default: "" },
  active: { type: Boolean, default: true },
  createdAt: { type: Date },
  updatedAt: { type: Date },
  deletedAt: { type: Date },
});

export { wordSchema };
