import { wordModel } from "../models/word.model";

class WordController {
  getWords = async () => {
    const filter = {};
    const fields = ["originalWord", "text", "textInfo", "source"];
    const words = await wordModel.find(filter, fields);

    return words;
  };

  getActiveWords = async () => {
    const filter = { active: true };
    const words = await wordModel.find(filter);

    return words;
  };
}

export { WordController };
