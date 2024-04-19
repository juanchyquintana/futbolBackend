import { Router } from "express";

const router = Router()

router.route('/stadiums').get((req, res) => {
    res.send("stadiums");
  });

export default router