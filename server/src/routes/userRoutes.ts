import { Router } from "express";
import { getUsers,postUser } from "../controllers/userController";

const router = Router();

// ✅ This will respond to GET /users
router.get("/", getUsers);
router.post("/", postUser);

export default router;
