import server from "../../../server";
import request from "supertest";

describe("GET /", () => {
  it('Returns status code 200 with message "Hello World"', async () => {
    const res = await request(server).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Hello World!");
  });
});

describe("Testing /auth endpoints", () => {
  describe("Testing Registration, /register", () => {
    it("Creating a new user returns status code 201", async () => {
      const response = await request(server).post("/auth/register").send({
        username: "test-oliver",
        password: "1555",
        roleId: 1,
      });

      expect(response.statusCode).toBe(201);
    });
  });

  describe("Testing Login", () => {
    it("Return 200 on successful login", async () => {
      const response = await request(server).post("/auth/").send({
        username: "test-oliver",
        password: 1555,
      });

      expect(response.statusCode).toBe(200);
    });

    it("Return 200 on successful login", async () => {
      const response = await request(server).post("/auth/").send({
        username: "test-oliver",
      });
      expect(response.statusCode).toBe(401);
    });
  });
});
