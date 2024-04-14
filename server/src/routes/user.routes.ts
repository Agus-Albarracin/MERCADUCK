import { Router } from "express";
import { signUp, signIn, signOut } from "../controllers/user/index";

const router = Router();

router.post("/signup", signUp);

router.post("/signin", signIn);

router.get("/signout", signOut);

// router.get("/profile", profile);

export default router;