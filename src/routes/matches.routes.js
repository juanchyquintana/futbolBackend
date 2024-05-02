import { Router } from "express";
import {
  getMatchs,
  createMatch,
  getMatchsById,
  updateMatch,
  deleteMatch
} from "../controllers/matchController.js";
import matchValidator from "../helpers/validators/matchValidator.js";

const router = Router();

router.route("/matchs").get(getMatchs).post(matchValidator, createMatch);

router
  .route("/matchs/:id")
  .get(getMatchsById)
  .put(matchValidator, updateMatch)
  .delete(deleteMatch);

export default router;
