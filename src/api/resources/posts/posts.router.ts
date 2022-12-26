import { Router } from "express";
import {
  getAllPosts,
  createPost,
  // getPostById,
  // getPostsByUserId,
  // deletePostById,
  // updatePostById,
} from "./post.handlers";

export let router = Router();

router.get<{}, any>("/", getAllPosts);
router.post<{}, any>("/", createPost);
// router.get<{ userId: string }, any>("/user_posts/:userId", getPostsByUserId);
// router.delete<{}, any>("/:postId", deletePostById);
// router.get<{ postId: string }, any>("/:postId", getPostById);
// router.post<{ postId: string }, any>("/:postId", updatePostById);
