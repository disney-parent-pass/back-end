import * as dotenv from "dotenv";
import cors from "cors";
import express, { Application } from "express";
import helmet from "helmet";
import { logger } from "./middleware/logger";

const development = "development";
const isDevelopment = process.env.NODE_ENV === development;
if (isDevelopment) {
  dotenv.config();
}

import { router as HelloRouter } from "./resources/pulse/pulse";
import { router as AuthRouter } from "./resources/auth/auth_router";
import { router as PostRouter } from "./resources/posts/index";

// A server, to configure
const server: Application = express();

// Configuration of a server
server.use(cors());
server.use(helmet());
server.use(express.json());

// Middlewares
server.use(logger);

// Define the routes with appropriate routers
server.use("/", HelloRouter);
server.use("/auth", AuthRouter);
server.use("/api/posts", PostRouter);

export default server;
