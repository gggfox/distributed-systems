import express from "express";
import * as dotenv from "dotenv";
import router from "./routes";
import cors from "cors";
import axios from "axios";
import { eventHandler } from "./eventHandler";
import { Event } from "./types";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use("/", router);

const port: string = process.env.PORT || "3000";
app.listen(port, async function () {
  try {
    // bring query service up to speed after down time.
    const res: Event[] = await axios.get("http://localhost:4005/events");
    for (let event of res) {
      console.log("Processing event: ", event.type);
      eventHandler.get(event.type)!(event.data);
    }
  } catch (err) {
    console.log(err);
  } finally {
    console.log("running on port: " + port);
  }
});
