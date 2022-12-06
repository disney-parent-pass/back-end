import server from "../../server";
import request from "supertest";

import StatusCodes from "../../utils/status_codes";

describe("Testing a the /api/posts protected route", () => {
  it(`should return status code ${StatusCodes.UNAUTHORIZED} with message`, async () => {
    const res = await request(server).get("/api/posts/");
    expect(res.statusCode).toEqual(StatusCodes.UNAUTHORIZED);
  });

  it(`should be json format with message key and status code ${StatusCodes.UNAUTHORIZED}`, async () => {
    const res = await request(server).get("/api/posts");
    expect(res.get('Content-Type')).toEqual('application/json; charset=utf-8');
    expect(res.statusCode).toEqual(StatusCodes.UNAUTHORIZED);
    expect(res.body.message).toEqual("Not authorized, no token present");
  })
});
