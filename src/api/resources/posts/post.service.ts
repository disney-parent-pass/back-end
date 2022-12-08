import Post from "./post.model";
import { NewPostDto } from "./types";

class PostService {
  public async getAllPosts() {
    return Post.getAllPosts();
  }
  public async createPost(newPost: NewPostDto) {
    return Post.insert(newPost);
  }
}

export default new PostService();
