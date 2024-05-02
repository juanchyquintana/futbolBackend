import { Router } from "express";
import {
  createStadium,
  getStadiums,
  getStadiumsById,
  updateStadium,
  deleteStadium,
} from "../controllers/stadiumController.js";
import stadiumValidator from "../helpers/validators/stadiumValidator.js";

const router = Router();

router.route("/stadium").get(getStadiums).post(stadiumValidator, createStadium);

router
  .route("/stadium/:id")
  .get(getStadiumsById)
  .put(stadiumValidator, updateStadium)
  .delete(deleteStadium);

export default router;
