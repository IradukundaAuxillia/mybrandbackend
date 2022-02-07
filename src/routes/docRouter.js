import { Router } from "express";
import docRouter from "../documentation/index";


const router = Router();
router.get("/", welcome);
router.use("/api/v1/documentation", docRouter);

export default router;
