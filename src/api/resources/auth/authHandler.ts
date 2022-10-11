import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import userService from "../../service/user";

const BAD_REQUEST: number = 400;
const SERVER_ERROR: number = 500;

export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      let payload = await userService.createUser(req.body);
      res.status(payload.status).send(payload.message);
    } catch (error) {
      res.status(BAD_REQUEST).send("Caught the error in registerUser: \n" + error);
    }
  }
);

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  try {
    let payload = await userService.loginUser(req.body);
    res.status(payload.status).send(payload.message);
  } catch (error) {
    res.status(SERVER_ERROR).send(error);
  }
});
