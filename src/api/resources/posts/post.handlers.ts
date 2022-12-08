import { Request, Response } from "express";

import PostService from "./post.service";

import { getPostDto } from "./posts.utils";
import { NewPostDto, PostModel } from "./types";
import StatusCodes from "../../utils/status_codes";

// TODO: Add express-async-handler to all router handlers
export function getAllPosts(_: Request, res: Response) {
  PostService.getAllPosts()
    .then((posts: PostModel[]) => {
      const mappedPosts = posts.map((post) => getPostDto(post));
      return res.status(StatusCodes.OK).json({ posts: mappedPosts });
    })
    .catch((e: Error) => {
      console.log(e);
      return res.status(StatusCodes.SERVER_ERROR).json({
        createdPost: null,
        message: "Something went wrong when creating the new post",
      });
    });
}

export function createPost(req: Request, res: Response) {
  /*
    data points of interest
    - time
    - number_of_kids
    - user_id 
    - park_area_id
    - ared_ride_id
  */
  // TODO: Add middleware to validate the body before we further process the request
  const { time, numberOfKids, userId, parkAreaId, areaRideId } = req.body;
  const newPost: NewPostDto = {
    time,
    numberOfKids,
    userId,
    parkAreaId,
    areaRideId,
  };

  PostService.createPost(newPost)
    .then((createdPost) => {
      const result = getPostDto(createdPost);
      return res.status(StatusCodes.CREATED).json({ createdPost: result });
    })
    .catch((e: Error) => {
      console.log(e);
      return res.status(StatusCodes.SERVER_ERROR).json({
        createdPost: null,
        message: "Something went wrong when creating the new post",
      });
    });
}

// export function getPostById(req: Request, res: Response) {
//   // TODO: pull unique post from the DB and map to DTO
//   const postId = +req.params.postId;
//   const foundPost = MOCK_POSTS.find((post) => post.id === postId);

//   if (!foundPost) {
//     return res
//       .status(StatusCodes.NOT_FOUND)
//       .json({ message: `Post with ID of ${postId} not found` });
//   }

//   return res.status(StatusCodes.OK).json({ post: getPostDto(foundPost) });
// }

// export function getPostsByUserId(req: Request, res: Response) {
//   const userId = +req.params.userId;

//   const userPosts = MOCK_POSTS.filter((post) => post.userId === userId);

//   if (userPosts.length === 0) {
//     return res
//       .status(StatusCodes.NOT_FOUND)
//       .json({ message: "Unable to find records for the provided user ID" });
//   }

//   return res.status(StatusCodes.OK).json({ posts: userPosts });
// }

// export function deletePostById(req: Request, res: Response) {
//   const postId = +req.params.postId;
//   const postToDelete = MOCK_POSTS.find((post) => post.id === postId);

//   if (!postToDelete) {
//     return res
//       .status(StatusCodes.NOT_FOUND)
//       .send({ message: `Post with ID of ${postId} not found` });
//   }

//   MOCK_POSTS = MOCK_POSTS.filter((post) => post.id !== postId);

//   return res.status(StatusCodes.OK).json({ deletedPost: postToDelete });
// }

// export function updatePostById(req: Request, res: Response) {
//   const postId = +req.params.postId;
//   const postChanges = req.body;

//   const postToUpdate = MOCK_POSTS.find((post) => post.id === postId);

//   if (!postToUpdate) {
//     return res
//       .status(StatusCodes.NOT_FOUND)
//       .json({ message: `Unable to find post with ID of ${postId}` });
//   }

//   MOCK_POSTS = MOCK_POSTS.map((post: Post) => {
//     if (post.id === postId) {
//       return {
//         ...post,
//         ...postChanges,
//       };
//     }

//     return post;
//   });

//   const updatedPost = MOCK_POSTS.find((post) => post.id === postId);

//   return res.status(StatusCodes.OK).json({ post: updatedPost });
// }
