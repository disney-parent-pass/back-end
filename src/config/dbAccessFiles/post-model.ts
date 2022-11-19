import { db } from "../dbConfig";

const postTable = "posts";
class DbAccess {
  public getAllPosts() {
    return db(postTable);
  }

  public async insertNewPost(newPost: any) {
    const [id]: number[] = await db(postTable).insert(newPost, "id");
    return this.findPostById(id);
  }

  public async findPostById(id: number) {
    return db(postTable).where({ id }).first();
  }
}

export default new DbAccess();
