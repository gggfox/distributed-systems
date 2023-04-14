import express from "express";
const router = express.Router();
import { Request, Response } from "express";
import { eventHandler } from "./eventHandler";
import { Post } from "./types";

export const posts = new Map<string, Post>();

router.get("/posts/:id", function (req: Request, res: Response) {
  const post = posts.get(req.params.id);
  res.status(200).send(post);
});

router.get("/posts", function (req: Request, res: Response) {
  const allposts: Post[] = Array.from(posts.values());
  res.status(200).send(allposts);
});

router.post("/events", function (req: Request, res: Response) {
  const { type, data } = req.body;
  console.log("Recived Event: ", req.body.type);
  if (eventHandler.has(type)) {
    eventHandler.get(type)!(data);
  }
  res.send({});
});

router;

export default router;
