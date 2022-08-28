import { Request, Response } from "express";
import { getPostDto, getUnixTime } from "./posts.utils";
import { Post, PostDto } from "./types";
const MOCK_POSTS: Array<Post> = [
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

export function getAllPosts(req: Request, res: Response) {
  // TODO: pull out all posts from the DB and map them to
  // external post object
  const posts = MOCK_POSTS.map((post) => {
    return getPostDto(post);
  }) as PostDto[];

  return res.status(200).json(posts);
}
