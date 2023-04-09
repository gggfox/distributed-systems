import axios from "axios";
import express, { application } from "express";
const router = express.Router();
import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';



const events = new Map<string, any>();

router.post('/events', function(req: Request, res: Response) {
  const event = req.body;
  console.log('EVENT: ', event)
  axios.post('http://localhost:4000/events', event).catch((err) => {
    console.log(err.message);
  });
  axios.post('http://localhost:4001/events', event).catch((err) => {
    console.log(err.message);
  });
  axios.post('http://localhost:4002/events', event).catch((err) => {
    console.log(err.message);
  });
  axios.post('http://localhost:4003/events', event).catch((err) => {
    console.log(err.message);
  });
  res.send({ status: 'OK'})
});


export default router;
