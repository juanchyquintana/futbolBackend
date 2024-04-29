import { Router } from "express";
import { getNews, createNew } from "../controllers/newControllers.js";

const router = Router();

router.route("/new").get(getNews).post(createNew);

export default router;
