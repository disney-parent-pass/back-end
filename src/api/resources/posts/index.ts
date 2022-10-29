import { Router } from "express";
import { getAllPosts, getPostById } from "./postHandlers";

export let router = Router();

router.get("/", getAllPosts);
router.get("/:postId", getPostById);
