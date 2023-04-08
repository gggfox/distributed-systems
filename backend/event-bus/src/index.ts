import express from "express";
import * as dotenv from "dotenv";
import router from "./routes"
import cors from "cors";
import axios from "axios";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors())

app.use("/", router)

const port: string = process.env.PORT || '3000';
app.listen(port, () => {
	console.log("running on port: " + port);
});
