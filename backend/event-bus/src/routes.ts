import axios from "axios";
import express from "express";
const router = express.Router();
import { Request, Response } from "express";

interface Event {
  type: string;
  data: Object;
}

const events: Event[] = [];

router.post("/events", function (req: Request, res: Response) {
  const event: Event = req.body;
  events.push(event);
  console.log("EVENT: ", event);
  axios.post(process.env.POSTS_SERVICE_URL!, event).catch((err) => {
    console.log(err.message);
  });
  axios.post(process.env.COMMENT_SERVICE_URL!, event).catch((err) => {
    console.log(err.message);
  });
  axios.post(process.env.QUERY_SERVICE_URL!, event).catch((err) => {
    console.log(err.message);
  });
  axios.post(process.env.MODERATION_SERVICE_URL!, event).catch((err) => {
    console.log(err.message);
  });
  res.send({ status: "OK" });
});

router.get("/events", function (req: Request, res: Response) {
  res.status(200).send(events);
});

export default router;
