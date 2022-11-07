import { Router } from "express";
import scoreCard from "./scoreCard";

const router = Router();

router.use('/', scoreCard);
export default router;