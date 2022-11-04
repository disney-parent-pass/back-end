import { Request, Response, NextFunction } from "express";
import expressAsyncHandler from "express-async-handler";

import user from "../dao/user";
import StatusCodes from "../status_codes";

export const validate_username = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {

    const username = req.body.username;

    if (!username) {
      res.status(StatusCodes.MISSING_CREDENTIAL).send({
        status: StatusCodes.MISSING_CREDENTIAL,
        message: "Missing username",
      });
      return;
    }

    await user.retrieveUser(username).then((exists) => {
      const userExists = exists != undefined;

      if (userExists) {
        res
          .status(StatusCodes.USERNAME_TAKEN)
          .send({ message: "Sorry, a user with this username already exists" });
        return;
      }
      next();
    });
  }
);
