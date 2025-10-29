import express from "express";
import authRoutes from "./auth.routes.js"
import taskRoutes from "./task.routes.js"
import categoryRoutes from "./category.routes.js"

const router=express.Router();

router.use("/auth",authRoutes);
router.use("/categories",categoryRoutes);
router.use("/tasks",taskRoutes);

export default router;