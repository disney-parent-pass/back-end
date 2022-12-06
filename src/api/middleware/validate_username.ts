import { Request, Response, NextFunction } from "express";
import expressAsyncHandler from "express-async-handler";

import user from "../dao/user";
import StatusCodes from "../utils/status_codes";

/**
 * Middleware to validate that a provided username
 * does not already exist in the database
 *
 * @param req : The JSON payload for the register endpoint
 *
 * @param res : a response object should an error occur
 *
 * @param next : the next function to call on the route
 */
export const validate_username = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const username = req.body.username;

    if (!username) {
      res.status(StatusCodes.UNAUTHORIZED).json({
        status: StatusCodes.UNAUTHORIZED,
        message: "Missing username",
      });
      return;
    }

    await user.retrieveUser(username).then((exists) => {
      const userExists = exists != undefined;

      if (userExists) {
        res
          .status(StatusCodes.USERNAME_TAKEN)
          .json({ message: "Sorry, a user with this username already exists" });
        return;
      }
      next();
    });
  }
);
