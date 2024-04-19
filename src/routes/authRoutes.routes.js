import { Router } from "express";

const router = Router()

router.route('/auth/register').get((req, res) => {
    res.send("user auth");
  });

export default router