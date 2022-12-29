import { NextFunction, Request, Response } from "express";
import { validateNewPost } from "../validate_new_post";

/*
  Supporting links to testing approach
  How to unite test middleware: https://javascript.plainenglish.io/how-to-unit-test-express-middleware-typescript-jest-c6a7ad166e74
  Mocking/stubbing res (a simple Express response) with Jest: https://codewithhugo.com/express-request-response-mocking/
*/

const getMockResponse = () => {
  const res = {} as any;
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe("Middleware: Validate New Post", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction = jest.fn();

  beforeEach(() => {
    mockRequest = {};
    mockResponse = getMockResponse();
  });

  it("should call response status when bad request body provided", () => {
    mockRequest = {
      body: {
        numberOfKids: 3,
        userId: 1,
        parkAreaId: 1,
        time: "2022-04-16T18:30:00.000Z",
      },
    };

    validateNewPost(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(mockResponse.status).toBeCalled();
  });
  it("should call response json when bad request body provided", () => {
    mockRequest = {
      body: {
        numberOfKids: 3,
        userId: 1,
        parkAreaId: 1,
        time: "2022-04-16T18:30:00.000Z",
      },
    };

    validateNewPost(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(mockResponse.json).toBeCalled();
  });

  it("should call next function when a valid request body is provided", () => {
    mockRequest = {
      body: {
        userId: 1,
        parkAreaId: 1,
        areaRideId: 1,
        numberOfKids: 3,
        time: "2022-04-16T18:30:00.000Z",
      },
    };

    validateNewPost(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(nextFunction).toBeCalled();
  });
});
