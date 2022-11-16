import { Request, Response, Router } from "express";
import StatusCodes from "../../utils/status_codes";

export let router: Router = Router();

// A simple endpoint to allow quick "Heart beat" tests
router.route("/").get((_req: Request, res: Response) => {
  res.status(StatusCodes.OK).send("Hello World!");
});
