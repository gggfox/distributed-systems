import express from "express";
const router = express.Router();
import { Request, Response } from "express";
import axios from "axios";

router.post("/events", async function (req: Request, res: Response) {
  const { type, data } = req.body;
  console.log("Recived Event ", type);

  if (type === "CommentCreated") {
    const status = data.content.includes("orange") ? "rejected" : "approved";
    await axios.post(process.env.EVENT_BUS_URL!, {
      type: "CommentModerated",
      data: {
        id: data.id,
        postId: data.postId,
        status,
        content: data.content,
      },
    });
  }
  res.send({});
});

export default router;
