/**
 * This file houses any files related to verifying client
 * JWT payloads
 */
import { Request, Response, NextFunction } from "express";
import expressAsyncHandler from "express-async-handler";
import StatusCodes from "../utils/status_codes";

import { JwtPayload, verify } from "jsonwebtoken";

import { secret } from "../../config/secrets";
import UserDAO from "../dao/user";

/**
 * Verifies a valid JWT is present
 */
export const protect = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        // Extract out the token from the headers
        token = req.headers.authorization.split(" ")[1];

        const decoded: string | JwtPayload = verify(token, secret.jwtSecret);

        // We ignore here since the username param will be present otherwise
        // the catch block will execute.
        // @ts-ignore
        let usr = await UserDAO.retrieveUser(decoded.username);
        next();
      } catch (error) {
        res
          .status(StatusCodes.UNAUTHORIZED)
          .json({ message: "Not Authorized" });
        return;
      }
    }

    if (!token) {
      res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "Not authorized, no token present" });
      return;
    }
  }
);
