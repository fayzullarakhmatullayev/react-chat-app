import { Router } from "express";
import {
  getAllUsers,
  login,
  register,
  setAvatar,
} from "../controllers/usersController.js";
const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/set-avatar/:id", setAvatar);
router.get("/allusers/:id", getAllUsers);

export default router;
