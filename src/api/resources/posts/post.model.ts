import { db } from "../../../config/dbConfig";
import { NewPostDto, PostModel } from "./types";

const postTable = "posts";
class DbAccess {
  public async getAllPosts(): Promise<PostModel[]> {
    return await db(postTable);
  }

  public async insert(newPost: NewPostDto): Promise<PostModel> {
    console.log("DBAccess.insert: ", newPost);
    const { time, areaRideId, numberOfKids, parkAreaId, userId } = newPost;
    const queryObj = {
      time: time,
      number_of_kids: numberOfKids,
      user_id: userId,
      park_area_id: parkAreaId,
      area_ride_id: areaRideId,
      is_open: true,
      zapped: false,
    };
    const [{ id }] = await db(postTable).insert(queryObj, "id");
    return this.findPostById(id);
  }

  public async findPostById(id: number) {
    console.log("DBAccess.findPostById: ", id);
    return db(postTable).where("id", id).first();
  }
}

export default new DbAccess();
