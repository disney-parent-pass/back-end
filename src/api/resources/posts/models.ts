import Post from "../../../config/dbAccessFiles/post-model";

class PostDao {
  async getAllPosts() {
    const posts = await Post.getAllPosts();
    return posts;
  }
}

export default new PostDao();
