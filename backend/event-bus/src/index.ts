import express from "express";
import * as dotenv from "dotenv";
import router from "./routes";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use("/", router);

const port: string = process.env.PORT || "4005";
app.listen(port, () => {
  console.log(
    process.env.POSTS_SERVICE_URL,
    process.env.COMMENT_SERVICE_URL,
    process.env.QUERY_SERVICE_URL,
    process.env.MODERATION_SERVICE_URL
  );
  console.log("running on port: " + port);
});
