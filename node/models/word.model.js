import { model } from "mongoose";
import { wordSchema } from "../schemas/word.schema";

const wordModel = new model("word", wordSchema);

export { wordModel };
