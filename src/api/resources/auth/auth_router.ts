import { Router } from "express";
import { loginUser, registerUser } from "../auth/authHandler";

export let router: Router = Router();

// Route to sign in and returns a JWT
router.route("/").post(loginUser);

// Route to signup a new user
router.route("/register").post(registerUser);
