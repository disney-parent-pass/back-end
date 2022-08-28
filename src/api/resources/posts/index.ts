import { Router } from "express";
import { getAllPosts } from "./postHandlers";

export let router = Router();

router.get("/", getAllPosts);
