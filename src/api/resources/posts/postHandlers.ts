import { Request, Response } from "express";
import { getPostDto, getUnixTime } from "./posts.utils";
import { Post, PostDto } from "./types";
import PostDao from "./models";

import StatusCodes from "../../utils/status_codes";

let MOCK_POSTS: Array<Post> = [
  {
    id: 1,
    userId: 1,
    careTakerId: null,
    numberOfKids: 2,
    areaRideId: 3,
    parkAreaId: 1,
    isOpen: true,
    time: getUnixTime(new Date(2022, 3, 15, 13, 30)),
  },
  {
    id: 2,
    userId: 1,
    careTakerId: null,
    numberOfKids: 2,
    areaRideId: 3,
    parkAreaId: 1,
    isOpen: true,
    time: getUnixTime(new Date(2022, 3, 16, 13, 30)),
  },
];

export function getAllPosts(_: Request, res: Response) {
  // TODO: pull out all posts from the DB and map them to
  // external post object
  const posts = MOCK_POSTS.map((post) => {
    return getPostDto(post);
  }) as PostDto[];

  PostDao.getAllPosts()
    .then((posts) => {
      return res.status(StatusCodes.OK).json({ posts });
    })
    .catch((err) => console.log("Erro retrieving posts\n:", err));
}

export function getPostById(req: Request, res: Response) {
  // TODO: pull unique post from the DB and map to DTO
  const postId = +req.params.postId;
  const foundPost = MOCK_POSTS.find((post) => post.id === postId);

  if (!foundPost) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: `Post with ID of ${postId} not found` });
  }

  return res.status(StatusCodes.OK).json({ post: getPostDto(foundPost) });
}

export function getPostsByUserId(req: Request, res: Response) {
  const userId = +req.params.userId;

  const userPosts = MOCK_POSTS.filter((post) => post.userId === userId);

  if (userPosts.length === 0) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "Unable to find records for the provided user ID" });
  }

  return res.status(StatusCodes.OK).json({ posts: userPosts });
}

export function deletePostById(req: Request, res: Response) {
  const postId = +req.params.postId;
  const postToDelete = MOCK_POSTS.find((post) => post.id === postId);

  if (!postToDelete) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .send({ message: `Post with ID of ${postId} not found` });
  }

  MOCK_POSTS = MOCK_POSTS.filter((post) => post.id !== postId);

  return res.status(StatusCodes.OK).json({ deletedPost: postToDelete });
}

export function updatePostById(req: Request, res: Response) {
  const postId = +req.params.postId;
  const postChanges = req.body;

  const postToUpdate = MOCK_POSTS.find((post) => post.id === postId);

  if (!postToUpdate) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: `Unable to find post with ID of ${postId}` });
  }

  MOCK_POSTS = MOCK_POSTS.map((post: Post) => {
    if (post.id === postId) {
      return {
        ...post,
        ...postChanges,
      };
    }

    return post;
  });

  const updatedPost = MOCK_POSTS.find((post) => post.id === postId);

  return res.status(StatusCodes.OK).json({ post: updatedPost });
}
