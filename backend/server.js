const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Products = require("./models/Products"); // Ensure the Product model is imported correctly

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/productsdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected")).catch(err => console.error(err));

// Get all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get product by barcode
app.get("/api/products/barcode/:barcode", async (req, res) => {
  try {
    const barcode = req.params.barcode.trim(); // Trim whitespace from barcode
    console.log("Searching for product with barcode:", barcode);
    const product = await Products.findOne({ barcode });

    if (!product) {
      console.log("Product not found for barcode:", barcode);
      return res.status(404).json({ message: "Product not found" });
    }

    console.log("Product found:", product);
    res.json(product);
  } catch (err) {
    console.error("Error finding product by barcode:", err);
    res.status(500).json({ error: err.message });
  }
});

// Add a new product
app.post("/api/products", async (req, res) => {
  try {
    const newProduct = new Products(req.body);
    const savedProduct = await newProduct.save();
    console.log("Product added successfully:", savedProduct);
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error("Error adding product:", err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
