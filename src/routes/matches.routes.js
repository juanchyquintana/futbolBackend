import { Router } from "express";

const router = Router()

router.route('/matches').get((req, res) => {
    res.send("matches");
  });

export default router