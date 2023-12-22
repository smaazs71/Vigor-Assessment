import express from "express";
import {
  register,
  updateUser,
  login,
  validateEmail,
} from "../../controller/userController.js";
import { protect } from "../../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(register).put(protect, updateUser);

router.route("/validate-email").put(protect, validateEmail);

router.route("/login").post(login);

export default { route: router, name: "user" };
