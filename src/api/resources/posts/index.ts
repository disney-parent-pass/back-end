import { Router } from "express";
import {
  getAllPosts,
  getPostById,
  getPostsByUserId,
  deletePostById,
  updatePostById,
} from "./postHandlers";

export let router = Router();

router.get<{}, any>("/", getAllPosts);
router.get<{}, any>("/:userId", getPostsByUserId);
router.delete<{}, any>("/:postId", deletePostById);
router.get<{ postId: string }, any>("/:postId", getPostById);
router.post<{ postId: string }, any>("/:postId", updatePostById);
