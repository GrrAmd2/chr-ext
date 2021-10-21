import { Router } from "express";

const route = Router();

route.get("/", (req, res) => {
  res.sendFile("home.html");
});

export default route;
