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

const port: string = process.env.PORT || "3000";
app.listen(port, () => {
  console.log("v1011");
  console.log("running on port: " + port);
});
