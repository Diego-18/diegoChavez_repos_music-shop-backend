import cors from "cors";
import "dotenv/config";
import express from "express";

const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());

app.listen(PORT, () => console.log(`Ready for the port: ${PORT}`));
