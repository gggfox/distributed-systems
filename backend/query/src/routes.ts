import express from "express";
const router = express.Router();
import { Request, Response } from "express";

interface Comment {
  id: string;
  content: string
  status: string
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
    const {id, content , postId, status} = data;
    if (!posts.has(postId)) {
      throw new Error("trying to add comment to non existing post")
    }
    const post:Post = posts.get(postId)!;
    const comment: Comment = {id, content, status}
    post?.comments.push(comment)
    posts.set(postId, post)
  }

  if (type === "CommentUpdated") {
    const { id, content, postId, status} = data
    if (!posts.has(postId)) {
      throw new Error("trying to retrive a non existing post")
    }
    const post = posts.get(postId);
    const comments = post?.comments.map((comment) => {
      if (comment.id === id) {
        comment.status = status;
        comment.content = content;
      }
      return comment;
    });
    post!.comments = comments ?? [];
    posts.set(postId, post!)
  }
  console.log(posts)
  res.send({})
});

export default router;
