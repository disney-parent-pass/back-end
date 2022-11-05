/**
 * This file houses any files related to verifying client
 * JSON payloads to avoid processing bad data deep in the application.
 *
 */
import { Request, Response, NextFunction } from "express";
import expressAsyncHandler from "express-async-handler";
import StatusCodes from "../utils/status_codes";

/**
 * Verifies the JSON payload has a username field
 */
export const verify_username = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const username = req.body.username
    if (!username) {
      res.status(StatusCodes.UNAUTHORIZED).send({
        status: StatusCodes.UNAUTHORIZED,
        message: "Missing username",
      });
      return;
    }

    next();
  }
);

/**
 * Verifies the JSON payload has a password field
 */
export const verify_password = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const password = req.body.password
    if (!password) {
      res.status(StatusCodes.UNAUTHORIZED).send({
        status: StatusCodes.UNAUTHORIZED,
        message: "Missing password",
      });
      return;
    }

    next();
  }
);

/**
 * Verifies the JSON payload has a roleId field
 */
export const verify_role_id = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const roleId = req.body.roleId
    if (!roleId) {
      res.status(StatusCodes.UNAUTHORIZED).send({
        status: StatusCodes.UNAUTHORIZED,
        message: "Missing roleId",
      });
      return;
    }

    next();
  }
);
