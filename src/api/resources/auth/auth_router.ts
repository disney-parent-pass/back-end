import { Router } from "express";
import { loginUser, registerUser } from "../auth/authHandler";

import { validate_username } from "../../middleware/validate_username";
import {
  verify_username,
  verify_password,
  verify_role_id,
} from "../../middleware/verify_json";

export let router: Router = Router();

// For each route on this router, verify these two fields
// exists.
router.use(verify_username, verify_password);

// Route to sign in and returns a JWT
router.route("/").post(loginUser);

// Route to signup a new user, after ensure roleId exists, and the username
// hasn't been used already
router.route("/register").post(verify_role_id, validate_username, registerUser);
