import { Router } from "express";

const router = Router();

router.route("/teams").get((req, res) => {
  res.send("teams");
});

export default router;
