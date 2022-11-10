import server from "../../server";
import request from "supertest";

import StatusCodes from "../../utils/status_codes";

describe("Testing a sample protected route", () => {
  it(`should return status code ${StatusCodes.UNAUTHORIZED} with message`, async () => {
    const res = await request(server).get("/api/posts/");
    expect(res.statusCode).toEqual(StatusCodes.UNAUTHORIZED);
  });
});
