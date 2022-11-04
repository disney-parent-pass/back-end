import { Request, Response, NextFunction } from "express";
import expressAsyncHandler from "express-async-handler";
import user from "../dao/user";

const USERNAME_TAKEN: number = 409;
const MISSING_CREDENTIAL: number = 401;

export const validate_username = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {

    const username = req.body.username;

    if (!username) {
      res.status(MISSING_CREDENTIAL).send({
        status: MISSING_CREDENTIAL,
        message: "Missing username",
      });
      return;
    }

    if (!req.body.password) {
      res
        .status(MISSING_CREDENTIAL)
        .send({ status: MISSING_CREDENTIAL, message: "Missing password" });
      return;
    }

    if (!req.body.roleId) {
      res
        .status(MISSING_CREDENTIAL)
        .send({ status: MISSING_CREDENTIAL, message: "Missing roleId" });
      return;
    }

    await user.retrieveUser(username).then((exists) => {
      const userExists = exists != undefined;

      if (userExists) {
        res
          .status(USERNAME_TAKEN)
          .send({ message: "Sorry, a user with this username already exists" });
        return;
      }
      next();
    });
  }
);
