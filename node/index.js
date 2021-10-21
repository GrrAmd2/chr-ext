import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import session from "express-session";

import rootRoutes from "./routes/root.routes.js";
import wordsRoutes from "./routes/words.routes.js";

dotenv.config();

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 3, // expires in 3 hours [ 3 (hr) * 60 (min / hr) * 60 (s / min) * 1000 (ms / s) ]
    },
  })
);

app.use(express.static("./views"));
app.use(express.static("./public"));

app.use("/", rootRoutes);
app.use("/api/words", wordsRoutes);

app.listen(process.env.PORT, () => {
  console.log("Your API is listening on port " + process.env.PORT);
});
