import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();
const app = express();
app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => res.send("Portfolio backend running..."));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
