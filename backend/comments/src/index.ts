import express from "express";
import { randomBytes } from "crypto";

const app = express();
app.use(express.json());

interface Comment {
	id: string;
	content: string;
}

const commentsByPostId = new Map<string, Comment[]>([]);

app.get("/posts/:id/comments", (req, res) => {
	res.status(200).send(commentsByPostId.get(req.params.id) ?? []);
});

app.post("/posts/:id/comments", (req, res) => {
	const id = randomBytes(4).toString("hex");
	const { content }: { content: string } = req.body;
	if (typeof content !== "string") {
		throw new Error("content is not string");
	}
	const comments = commentsByPostId.get(req.params.id) ?? [];
	comments.push({ id, content });
	commentsByPostId.set(req.params.id, comments);
	res.status(201).send(comments);
});

app.listen(4445, () => {
	console.log("running on port 4445");
});
