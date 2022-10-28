import { Request, Response, Router } from "express";

export let router: Router = Router();

// A simple endpoint to allow quick "Heart beat" tests
router.route("/").get((_req: Request, res: Response) => {
  res.status(200).send("Hello World!");
});
