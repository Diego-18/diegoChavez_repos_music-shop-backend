import cors from "cors";
import "dotenv/config";
import express from "express";
import { router } from "./routes";

const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use(router);

app.listen(PORT, () => console.log(`Ready for the port: ${PORT}`));
