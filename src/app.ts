import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//testing
app.get("/", (req: Request, res: Response) => {
  res.send("Working successfully");
});

export default app;
