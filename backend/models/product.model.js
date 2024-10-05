//// convenciones con modelos de DB como Prodcuts.js, products.js o products.model.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		price: { type: Number, required: true },
		image: { type: String, required: true },
	},
	{ timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
