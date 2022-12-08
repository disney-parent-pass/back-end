import Post from "./post.model";
import { NewPostDto } from "./types";

class PostService {
  async getAllPosts() {
    return Post.getAllPosts();
  }
  async createPost(newPost: NewPostDto) {
    return Post.insert(newPost);
  }
}

export default new PostService();
