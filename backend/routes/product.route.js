import express from "express";
import {
	getProducts,
	createProduct,
	updteProduct,
	deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();
router.get("/", getProducts);

router.post("/", createProduct);
//console.log(process.env.MONGO_URI);

router.put("/:id", updteProduct);

router.delete("/:id", deleteProduct);

export default router;
