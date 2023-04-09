import express from "express";
const router = express.Router();
import { Request, Response } from "express";
import axios from "axios";
interface Post {
  id: string
	title: string;
}

router.post('/events', async function (req: Request, res: Response) {
  const { type, data } = req.body;

  if (type === "CommentCreated") {
    const status = data.content.includes("orange") ? "rejected" : "approved";
    await axios.post("http://localhost:4005/events", {
      type: "CommentModerated",
      data: {
        id: data.id,
        postId: data.postId,
        status,
        content: data.content
      }
    })
  }
  res.send({})
});

export default router;
