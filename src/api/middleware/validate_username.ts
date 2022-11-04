import { Request, Response, NextFunction } from "express";
import expressAsyncHandler from "express-async-handler";

import user from "../dao/user";
import StatusCodes from "../status_codes";

export const validate_username = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.username) {
      res.status(StatusCodes.MISSING_CREDENTIAL).send({
        status: StatusCodes.MISSING_CREDENTIAL,
        message: "Missing username",
      });
      return;
    }

    let name_candidate = req.body.username;

    await user.retrieveUser(name_candidate).then((exists) => {
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
