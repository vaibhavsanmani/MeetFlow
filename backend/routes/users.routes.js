import { Router } from "express";
import { login, register } from "../controllers/user.controller.js";

const router = Router();

router.route("/login").post(login);
router.route("/register").post(register);
// add_to_activity and get_all_activity routes are not implemented yet

export default router;