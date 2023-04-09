import express, { application } from "express";
const router = express.Router();
import { Request, Response } from "express";
import { body, validationResult } from 'express-validator';
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
interface Post {
  id: string
	title: string;
}

const posts = new Map<string, Post>();

router.get("/posts/:id", function (req: Request, res: Response) {
	res.status(200).send(posts.get(req.params.id));
});

router.get("/posts", function (req: Request, res: Response) {
  const allposts: Post[] = Array.from(posts.values())
  res.status(200).send(allposts)
});

router.post(
  "/posts",
  body('title').isLength({ min: 2 }),
  function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const id = uuidv4();
    const post:Post = {
      id: id,
      title: req.body.title,
    }
    posts.set(id, post)
    axios.post(process.env.EVENT_BUS_URL ?? "", {
      type: 'PostCreated',
      data: post
    })
    res.status(201).send(post);
  }
);

router.patch("/posts/:id", function(req: Request, res: Response){
  posts.set(req.params.id, req.body)
  res.status(200).send(req.body)
})

router.delete("/posts/:id", function(req: Request, res: Response) {
  posts.delete(req.params.id);
  res.status(200).send();
})

router.post('/events', function(req: Request, res: Response) {
  console.log('Recived Event ', req.body.type);
  res.send({})
});

export default router;
