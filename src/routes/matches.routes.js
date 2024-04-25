import { Router } from "express";
import { createMatch } from "../controllers/matchController.js";

const router = Router()

router.route('/matches').get(createMatch);

export default router