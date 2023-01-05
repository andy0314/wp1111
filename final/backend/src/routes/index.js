import { Router } from "express";
import course from "./course"
import crawler from "./crawler"
import search from "./search"
import user from "./user"

const router = Router();

router.use('/course', course);
router.use('/crawler', crawler);
router.use('/search', search);
router.use('/user', user);

export default router;