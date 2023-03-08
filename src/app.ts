import cors from "cors";
import "dotenv/config";
import express from "express";
import db from "./config/database";
import { router } from "./routes";

const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

db()
	.then(() =>
		app.listen(PORT, () => console.log(`Ready for the port: ${PORT}`))
	)
	.catch((error) => {
		console.error(error);
	});
