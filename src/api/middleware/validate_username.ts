import { Request, Response, NextFunction } from "express";
import expressAsyncHandler from "express-async-handler";
import user from "../dao/user";

const USERNAME_TAKEN: number = 409;
const MISSING_CREDENTIAL: number = 401;

export const validate_username = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    
    if (!req.body.username) {
      res.status(MISSING_CREDENTIAL).send({
        status: MISSING_CREDENTIAL,
        message: "Missing username",
      });
      return
    }

    if (!req.body.password) {
      res
        .status(MISSING_CREDENTIAL)
        .send({ status: MISSING_CREDENTIAL, message: "Missing password" });
      return
    }

    if (!req.body.roleId) {
      res
        .status(MISSING_CREDENTIAL)
        .send({ status: MISSING_CREDENTIAL, message: "Missing roleId" });
      return
    }

    let name_candidate = req.body.username;
    await user.retrieveUser(name_candidate).then((r) => {
      console.log(`The result is: ${r}`);

      if (r != undefined) {
        res
          .status(USERNAME_TAKEN)
          .send({ message: "Sorry, a user with this username already exists" });
        return;
      }
      next();
    });
  }
);
