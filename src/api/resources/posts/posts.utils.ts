import { Post, PostDto } from "./types";

export function getUnixTime(dateObj: Date) {
  return Math.floor(dateObj.getTime() / 1000);
}

export function getPostDto(post: Post): PostDto {
  const { areaRideId, isOpen, numberOfKids, parkAreaId, time } = post;
  return {
    areaRideId,
    isOpen,
    numberOfKids,
    parkAreaId,
    time,
  } as PostDto;
}
