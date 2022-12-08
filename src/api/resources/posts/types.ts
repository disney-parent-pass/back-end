export type PostModel = {
  id: number;
  user_id: number;
  care_taker_id: number | null;
  number_of_kids: number;
  park_area_id: number;
  area_ride_id: number;
  is_open: boolean;
  time: Date;
};

export type NewPostDto = {
  time: number;
  numberOfKids: number;
  userId: number;
  parkAreaId: number;
  areaRideId: number;
};

export type PostDto = {
  numberOfKids: number;
  parkAreaId: number;
  areaRideId: number;
  isOpen: boolean;
  time: Date;
};
