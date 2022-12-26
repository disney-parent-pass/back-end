import request from "supertest";

import server from "../../../server";
import { db } from "../../../../config/dbConfig";
import StatusCodes from "../../../utils/status_codes";
describe("/api/posts", () => {
  describe("Test fetching all posts", () => {
    it("should return a status code of 200", async () => {
      const response = await request(server).get("/api/posts");
      expect(response.statusCode).toBe(StatusCodes.OK);
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
      expect(response.body.posts.length > 0).toBe(true);
    });
  });

  describe("Test create post", () => {
    // We dont care about system internals all we
    // care about is that as a client the system
    // behaves the way we expect it to

    beforeEach(async () => {
      await db("posts").delete();
    });

    it("should return a astatus code of 201 (created)", async () => {
      const response = await request(server)
        .post("/api/posts")
        .send({
          numberOfKids: 3,
          userId: 1,
          parkAreaId: 1,
          areaRideId: 1,
          time: new Date(2022, 3, 4),
        });

      expect(response.statusCode).toBe(StatusCodes.CREATED);
    });

    it("should return a response in JSON format", async () => {
      const response = await request(server)
        .post("/api/posts")
        .send({
          numberOfKids: 3,
          userId: 1,
          parkAreaId: 1,
          areaRideId: 1,
          time: new Date(2022, 3, 4),
        });

      expect(response.type).toMatch(/json/i);
    });
    it("should return a object with a key of createdPost", async () => {
      const response = await request(server)
        .post("/api/posts")
        .send({
          numberOfKids: 3,
          userId: 1,
          parkAreaId: 1,
          areaRideId: 1,
          time: new Date(2022, 3, 4),
        });

      expect(response.body.createdPost).toBeDefined();
    });

    it("created object should have keys areaRideId, isOpen, numberOfKids, parkAreaId and time", async () => {
      const response = await request(server)
        .post("/api/posts")
        .send({
          numberOfKids: 3,
          userId: 1,
          parkAreaId: 1,
          areaRideId: 1,
          time: new Date(2022, 3, 4),
        });

      const { areaRideId, isOpen, numberOfKids, parkAreaId, time } =
        response.body.createdPost;
      expect(areaRideId).toBeDefined();
      expect(isOpen).toBeDefined();
      expect(numberOfKids).toBeDefined();
      expect(parkAreaId).toBeDefined();
      expect(time).toBeDefined();
    });
  });
});
