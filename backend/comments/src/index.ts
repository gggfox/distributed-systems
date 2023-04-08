import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes"

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())
app.use("/", router)
const port:string = process.env.PORT || "3333"

app.listen(port, () => {
	console.log("running on port " + port);
});
