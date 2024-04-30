import { Router } from "express";
import { getStadiums } from "../controllers/stadiumController.js";

const router = Router()

router.route('/stadium').get(getStadiums);

export default router