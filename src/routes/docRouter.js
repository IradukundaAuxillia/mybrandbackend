import { Router } from "express";
import docRouter from "../../documentation/index";


const router = Router();
router.use("/v1/documentation", docRouter);

export default router;
