import { db } from "../dbConfig";

const postTable = "posts";
class DbAccess {
  public getAllPosts() {
    return db(postTable);
  }
}

export default new DbAccess();
