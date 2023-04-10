import axios from "axios";
import express, { application } from "express";
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
  axios.post("http://localhost:4000/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:4001/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:4002/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:4003/events", event).catch((err) => {
    console.log(err.message);
  });
  res.send({ status: "OK" });
});

application.get("/events", function (req: Request, res: Response) {
  res.status(200).send(events);
});

export default router;
