import server from "../../../server";
import request from "supertest";

describe("Testing the Pulse Endpoint /", () => {
  it('should return status code 200 with message "Hello World"', async () => {
    const res = await request(server).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Hello World!");
  });
});

describe("/auth", () => {
  describe("Testing Registration, /register", () => {
    it("should return status code 201 for registering a new user", async () => {
      const response = await request(server).post("/auth/register").send({
        username: "test-william",
        password: "best-meme420",
        roleId: 1,
      });
      expect(response.statusCode).toBe(201);
    });
    it("should return status code 401 if missing username", async () => {
      const response = await request(server).post("/auth/register").send({
        password: 1555,
        roleId: 1,
      });
      expect(response.statusCode).toBe(401);
    });
    it("should return status code 401 if missing password", async () => {
      const response = await request(server).post("/auth/register").send({
        username: "test-missing",
        roleId: 1,
      });
      expect(response.statusCode).toBe(401);
    });
    it("should return status code 401 if missing roleId", async () => {
      const response = await request(server).post("/auth/register").send({
        username: "test-missing",
        password: 1555,
      });
      expect(response.statusCode).toBe(401);
    });
    it("should return status code 409 if username exists", async () => {
      const response = await request(server).post("/auth/register").send({
        username: "tester-oliver",
        password: 1555,
        roleId: 1,
      });
      expect(response.statusCode).toBe(409);
    });
  });

  describe("Testing Login", () => {
    it("should return 200 on successful login", async () => {
      const response = await request(server).post("/auth/").send({
        username: "tester-oliver",
        password: 1555,
      });
      expect(response.statusCode).toBe(200);
    });

    it("should return 401 on failed login", async () => {
      const response = await request(server).post("/auth/").send({
        username: "tester-oliver",
      });
      expect(response.statusCode).toBe(401);
    });
  });
});
