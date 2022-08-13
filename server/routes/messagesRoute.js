import { Router } from "express";
import {
  getAllMessage,
  addMessage,
} from "../controllers/messagesController.js";
const router = Router();

router.post("/add-message", addMessage);
router.post("/get-message", getAllMessage);

export default router;
