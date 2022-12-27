import { NextFunction, Response, Request } from "express";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

// support date strings: https://zod.dev/?id=dates
const dateScheme = z.preprocess((arg) => {
  if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
}, z.date());

const newPostSchema = z.object({
  userId: z.number(),
  parkAreaId: z.number(),
  areaRideId: z.number(),
  numberOfKids: z.number(),
  time: dateScheme,
});

// safe parse handling: https://zod.dev/?id=safeparse
// parse handling: https://zod.dev/ERROR_HANDLING?id=a-demonstrative-example
export const validateNewPost = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newPost = req.body;
  const result = newPostSchema.safeParse(newPost);

  if (!result.success) {
    const errorMessage = fromZodError(result.error);
    const { message } = errorMessage;
    console.log("api.middleware.validate_new_post: ", message);

    return res.status(500).json({
      message: "Unable to create new post",
      reason: message,
    });
  }

  next();
};
