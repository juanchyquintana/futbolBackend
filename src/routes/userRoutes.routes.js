import { Router } from "express";
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  logIn,
} from "../controllers/userController.js";

const router = Router();

router.route("/user").get(getUsers).post(createUser);

router.route("/user/:id").get(getUserById).put(updateUser).delete(deleteUser);

router.route('/user/login').post(logIn)

export default router;
