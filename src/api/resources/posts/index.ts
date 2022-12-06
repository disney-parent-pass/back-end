import { Router } from "express";
import { protect } from "../../middleware/verify_jwt";
import {
  getAllPosts,
  getPostById,
  getPostsByUserId,
  deletePostById,
  updatePostById,
} from "./postHandlers";

export let router = Router();

router.use(protect)

router.get<{}, any>("/", getAllPosts);
router.get<{ userId: string }, any>("/user_posts/:userId", getPostsByUserId);
router.delete<{}, any>("/:postId", deletePostById);
router.get<{ postId: string }, any>("/:postId", getPostById);
router.post<{ postId: string }, any>("/:postId", updatePostById);
