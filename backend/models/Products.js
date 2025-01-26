const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  image: { type: String, required: false },
  description: { type: String, required: true },
  barcode: { type: String, unique: true, required: true }, 
});

module.exports = mongoose.model("Product", ProductSchema);
