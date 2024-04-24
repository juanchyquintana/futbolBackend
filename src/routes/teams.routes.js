import { Router } from "express";
import {
  createTeam,
  getTeamById,
  getTeams,
  updateTeam,
  deleteTeam,
} from "../controllers/teamController.js";

const router = Router();

router.route("/team").get(getTeams).post(createTeam);

router.route("/team/:id").get(getTeamById).put(updateTeam).delete(deleteTeam);

export default router;
