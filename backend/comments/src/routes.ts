import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router()

interface Comment {
	id: string;
	title: string;
}

const commentsByPostId = new Map<string, Comment[]>([]);

router.get("/posts/:id/comments", (req, res) => {
	res.status(200).send(commentsByPostId.get(req.params.id) ?? []);
});

router.post("/posts/:id/comments", (req, res) => {
	const id = uuidv4();
	const { title }: { title: string } = req.body;
	if (typeof title !== "string") {
    console.log(typeof title, title)
		throw new Error("content is not string");
	}
	const comments = commentsByPostId.get(req.params.id) ?? [];
	comments.push({ id, title });
	commentsByPostId.set(req.params.id, comments);
	res.status(201).send(comments);
});

export default router;
