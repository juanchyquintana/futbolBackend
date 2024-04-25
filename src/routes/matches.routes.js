import { Router } from "express";
import {
  getMatchs,
  createMatch,
  getMatchsById,
  updateMatch,
  deleteMatch
} from "../controllers/matchController.js";

const router = Router();

router.route("/matchs").get(getMatchs).post(createMatch);

router
  .route("/matchs/:id")
  .get(getMatchsById)
  .put(updateMatch)
  .delete(deleteMatch);

export default router;
