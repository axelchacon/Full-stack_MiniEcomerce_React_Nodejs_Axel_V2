import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js"; //connectDB from "./config/db.js";
import productRoutes from "./routes/product.route.js";

import path from "path";

dotenv.config();

const app = express();

app.use(express.json()); // for parsing application/json or allows us to accept JSON data in the body of the request

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT, () => {
	connectDB();
	console.log("Server running on port " + PORT);
});

//// Mongodb Atlas Password: AmowBCgVDrI61Pyg
////npm install mongodb
//mongodb+srv://axelchacon200:AmowBCgVDrI61Pyg@cluster0.x56kn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
