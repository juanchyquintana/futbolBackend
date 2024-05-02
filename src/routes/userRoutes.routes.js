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
import userValidator from "../helpers/validators/userValidator.js";

const router = Router();

router.route("/user").get(getUsers).post(userValidator, createUser);
router.route("/user/:id").get(getUserById).put(userValidator, updateUser).delete(deleteUser);
router.route("/user/login").post(logIn);

router.route("/account-confirm").get(confirmAccount);

router.route("/forgot-password").post(forgotPassword);
router.route("/forgot-password/:token").get(checkToken).post(newPassword);

export default router;
