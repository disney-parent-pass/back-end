import { PostModel, PostDto } from "./types";

export function getPostDto(post: PostModel): PostDto {
  const { area_ride_id, number_of_kids, park_area_id, is_open, time } = post;
  return {
    areaRideId: area_ride_id,
    isOpen: is_open,
    numberOfKids: number_of_kids,
    parkAreaId: park_area_id,
    time,
  } as PostDto;
}
