import server from "../../../server";
import request from "supertest";

describe("/api/posts", () => {
  describe("Test fetching all posts", () => {
    it("should return a status code of 200", async () => {
      const response = await request(server).get("/api/posts");
      expect(response.statusCode).toBe(200);
    });

    it("should return a JSON payload", async () => {
      const response = await request(server).get("/api/posts");
      expect(response.type).toMatch(/json/i);
    });

    it("should return a response with a key of posts", async () => {
      const response = await request(server).get("/api/posts");
      const { posts } = response.body;
      expect(posts).toBeDefined();
    });

    it("should return an array of objects", async () => {
      const response = await request(server).get("/api/posts");
      const { posts } = response.body;

      expect(Array.isArray(posts)).toBe(true);
      expect(typeof posts[0]).toEqual("object");
    });

    it("should featch all posts in the DB", async () => {
      const response = await request(server).get("/api/posts");
      expect(response.body.posts.length).toBe(1);
    });
  });
});
