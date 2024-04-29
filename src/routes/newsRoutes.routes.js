import { Router } from "express";
import {
  getNews,
  createNew,
  getNewById,
  updateNew,
  deleteNew
} from "../controllers/newControllers.js";

const router = Router();

router.route("/new").get(getNews).post(createNew);

router.route("/new/:id").get(getNewById).put(updateNew).delete(deleteNew);

export default router;
