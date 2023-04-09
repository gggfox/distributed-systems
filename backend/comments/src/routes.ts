import express from "express";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
const router = express.Router()
import { Request, Response } from "express";

interface Comment {
	id?: string;
  postId: string;
	content: string;
}

const commentsByPostId = new Map<string, Comment[]>([]);

router.get("/posts/:id/comments", function (req: Request, res: Response) {
	res.status(200).send(commentsByPostId.get(req.params.id) ?? []);
});

router.post("/posts/:id/comments", function (req: Request, res: Response) {
	const id = uuidv4();
  const postId = req.params.id
	const { content }: { content: string } = req.body;
	if (typeof content !== "string") {
    console.log(typeof content, content)
		throw new Error("content is not string");
	}
	const comments = commentsByPostId.get(postId) ?? [];
  const comment: Comment = {
    id: id,
    postId: postId,
    content: content
  }
	comments.push(comment);
	commentsByPostId.set(postId, comments);

    axios.post(process.env.EVENT_BUS_URL ?? "", {
      type: 'CommentCreated',
      data: comment
    })

	res.status(201).send(comments);
});

router.post('/events', function (req: Request, res: Response) {
  console.log('Recived Event ', req.body.type);
  res.send({})
});

export default router;
