import { Router } from "express";
import {
  createTeam,
  getTeamById,
  getTeams,
  updateTeam,
  deleteTeam,
} from "../controllers/teamController.js";
import teamValidator from "../helpers/validators/teamValidator.js";

const router = Router();

router.route("/team").get(getTeams).post(teamValidator, createTeam);

router.route("/team/:id").get(getTeamById).put(updateTeam).delete(deleteTeam);

export default router;
