import { Router } from "express";
import {
  createStadium,
  getStadiums,
  getStadiumsById,
  updateStadium,
  deleteStadium
} from "../controllers/stadiumController.js";

const router = Router();

router.route("/stadium").get(getStadiums).post(createStadium);

router.route("/stadium/:id").get(getStadiumsById).put(updateStadium).delete(deleteStadium);

export default router;
