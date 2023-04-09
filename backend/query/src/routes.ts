import express, { application } from "express";
const router = express.Router();
import { Request, Response } from "express";
import { body, validationResult } from 'express-validator';
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

interface Comment {
  id: string;
  content: string
}

interface Post {
  id: string;
  title: string
  comments: Comment[]
}

const posts = new Map<string, Post>();

router.get("/posts/:id", function (req: Request, res: Response) {
  const post = posts.get(req.params.id);
  res.status(200).send(post);
});

router.get("/posts", function (req: Request, res: Response) {
  const allposts: Post[] = Array.from(posts.values())
  res.status(200).send(allposts)
});

router.post('/events', function(req: Request, res: Response) {
  const { type, data } = req.body;
  if (type === "PostCreated") {
    const {id, title} = data;
    const post: Post = { id, title, comments: [] }
    posts.set(id, post)
  }
  if (type === "CommentCreated") {
    const {id, content , postId} = data;
    if (!posts.has(postId)) {
      throw new Error("trying to add comment to non existing post")
    }
    const post:Post = posts.get(postId)!;
    const comment: Comment = {id, content}
    post?.comments.push(comment)
    posts.set(postId, post)
  }
  console.log(posts)
  res.send({})
});

export default router;
