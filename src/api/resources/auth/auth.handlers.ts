import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import StatusCodes from "../../utils/status_codes";
import userService from "./user.service";

/**
 * The function representing the 'registration' endpoint.
 *
 * @param req: The JSON payload representing the new user
 *
 * @return res: the payload detailing if the signup was successful
 */
export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      let payload = await userService.createUser(req.body);
      res.status(payload.status).send({ message: `Created the user` });
      return;
    } catch (error) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .send("Caught the error in registerUser: \n" + error);
      return;
    }
  }
);

/**
 * The function for the 'login' endpoint
 *
 * @param req: the JSON (username and password) for a user
 *
 * @return res: the JSON payload with JWT token for the user
 *
 */
export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  try {
    let payload = await userService.loginUser(req.body);
    res.status(payload.status).send(payload.message);
    return;
  } catch (error) {
    res.status(StatusCodes.SERVER_ERROR).send(error);
    return;
  }
});
