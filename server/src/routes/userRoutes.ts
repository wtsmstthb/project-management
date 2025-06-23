import { Router } from "express";
import { getUsers } from "../controllers/userController";

const router = Router();

// ✅ This will respond to GET /users
router.get("/", getUsers);

export default router;
