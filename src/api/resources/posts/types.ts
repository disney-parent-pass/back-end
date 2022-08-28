export type PostDto = {
  numberOfKids: number;
  parkAreaId: number;
  areaRideId: number;
  isOpen: boolean;
  time: number;
};

export type Post = {
  id: number;
  userId: number;
  careTakerId: number | null;
  numberOfKids: number;
  parkAreaId: number;
  areaRideId: number;
  isOpen: boolean;
  time: number;
};
