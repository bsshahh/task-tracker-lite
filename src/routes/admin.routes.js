import express from "express";
import { getAllTasks } from "../controllers/admindashboardcontroller/admin.controller.js";
import { verifyToken, isAdmin } from "../middlewares/auth.middleware.js";

const router = express.Router();

//Admin dashboard
router.get("/dashboard", verifyToken, isAdmin, getAllTasks);

export default router;
