import { Router } from "express";
import { getAllPosts, getPostById, updatePostById } from "./postHandlers";

export let router = Router();

router.get<{}, any>("/", getAllPosts);
router.get<{ postId: string }, any>("/:postId", getPostById);
router.post<{ postId: string }, any>("/:postId", updatePostById);
