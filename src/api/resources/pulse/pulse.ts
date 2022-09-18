import { Request, Response, Router } from "express";

export let router: Router = Router();

router.route("/").get((_req: Request, res: Response) => {
  res.status(200).send("Hello World!");
});
