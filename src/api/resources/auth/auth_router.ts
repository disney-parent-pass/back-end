import { Router } from "express";
import { loginUser, registerUser } from "../auth/authHandler";

import { validate_username } from "../../middleware/validate_username";
import {
  verify_username,
  verify_password,
  verify_role_id,
} from "../../middleware/verify_json";

export let router: Router = Router();
router.use(verify_username, verify_password);

// Route to sign in and returns a JWT
router.route("/").post(loginUser);

// Route to signup a new user
router.route("/register").post(verify_role_id, validate_username, registerUser);
