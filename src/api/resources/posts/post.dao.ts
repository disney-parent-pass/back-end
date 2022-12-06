import Post from "./post.model";

class PostDao {
  async getAllPosts() {
    const posts = await Post.getAllPosts();
    return posts;
  }
}

export default new PostDao();
