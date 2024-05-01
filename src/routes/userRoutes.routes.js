import { Router } from "express";
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  logIn,
  confirmAccount,
  forgotPassword,
  checkToken,
  newPassword
} from "../controllers/userController.js";

const router = Router();

router.route("/user").get(getUsers).post(createUser);
router.route("/user/:id").get(getUserById).put(updateUser).delete(deleteUser);
router.route("/user/login").post(logIn);

router.route("/account-confirm").get(confirmAccount);

router.route("/forgot-password").post(forgotPassword);
router.route("/forgot-password/:token").get(checkToken).post(newPassword);

export default router;
