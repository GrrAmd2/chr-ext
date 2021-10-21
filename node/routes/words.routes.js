import { Router } from "express";
import { WordController } from "../controllers/word.controller.js";
import { createObjectCsvWriter } from "csv-writer";
import { unlink } from "fs";

const route = Router();

route
  .get("/", async (req, res) => {
    // gets the words in the DB and transforms them into a CSV file wich is served
    const filePath = "../uploads/words.csv";
		
    const words = await WordController.getWords();

    const csvWriter = createObjectCsvWriter({
      path: filePath,
      header: [
        { id: "originalWord", title: "Palabra" },
        { id: "text", title: "Texto" },
        { id: "textInfo", title: "Informacion de texto" },
        { id: "source", title: "Fuente" },
        { id: "active", title: "Activo" },
        { id: "createdAt", title: "Creado" },
        { id: "updatedAt", title: "Actualizado" },
        { id: "deletedAt", title: "Borrado" },
      ],
    });

    await csvWriter.writeRecords(words).then(() => {
      res.sendFile(filePath);
      unlink(filePath);
    });
  })
  .post("/", (req, res) => {
    // reads de CSV file and updates DB
		const filePath = "../uploads/words.csv"

		const 
  })
  .get("/active", (req, res) => {
    // gets the active words in the DB
    const words = await WordController.getActiveWords();

    return words;
  });

export default route;
