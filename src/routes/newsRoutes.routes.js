import { Router } from "express";
import {
  getNews,
  createNew,
  getNewById,
  updateNew,
  deleteNew,
} from "../controllers/newControllers.js";
import newValidator from "../helpers/validators/newValidator.js";

const router = Router();

router.route("/new").get(getNews).post(newValidator, createNew);

router
  .route("/new/:id")
  .get(getNewById)
  .put(newValidator, updateNew)
  .delete(deleteNew);

export default router;
