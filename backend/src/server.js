import cors from "cors";
import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const Port = process.env.PORT;

const app = express();

app.use(express.json()); // this middleware will parse JSON bodies : req.body

app.use(cors({
  origin: "http://localhost:5173", // replace with your frontend URL
  credentials: true
})); // this middleware will allow cross-origin requests

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(Port, () => {
    console.log("Server Started on Port :", Port);
  });
});

