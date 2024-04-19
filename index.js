import { fileURLToPath } from "url";
import express from "express";
import morgan from "morgan";
import path from "path";
import cors from "cors";
import './config/database.js'
import "dotenv/config"

const app = express();

app.set("port", process.env.PORT || 2504);
app.listen(app.get("port"), () => {
  console.log(`I'm in Port ${app.get("port")}`);
});

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "/public")));
