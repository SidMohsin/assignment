import React, { useEffect, useState } from "react";
import "../../App.css";
import "./ProductList.css";
import ProductDetails from "../ProductDetails/ProductDetails";
import BarcodeScanner from "../BarcodeScanner/BarcodeScanner";
import Footer from "../Footer/Footer";

const ProductList = ({ showScanner, onCloseScanner }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [popupMessage, setPopupMessage] = useState(""); // Message for popup
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch all products on load
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.error("Error fetching products:", err);
        setErrorMessage("Error loading products.");
      });
  }, []);

  const handleBarcodeDetected = async (barcode) => {
    console.log("Detected barcode:", barcode); // Log the detected barcode
    try {
      const response = await fetch(
        `http://localhost:5000/api/products/barcode/${barcode.trim()}`
      ); // Trim barcode

      if (response.ok) {
        const product = await response.json();
        console.log("Product found:", product);
        setSelectedProduct(product); // Show product details in a popup
        setPopupMessage("Product found!"); // Show message only when scanned
      } else if (response.status === 404) {
        console.log("Product not found for barcode:", barcode);
        alert('Product Not Found!')

        // if want to add product in database


    //     const addProduct = window.confirm(
    //       "Product not found. Do you want to add it?"
    //     );
    //     if (addProduct) {
    //       const name = prompt("Enter product name:");
    //       const category = prompt("Enter product category:");
    //       const price = prompt("Enter product price:");
    //       const brand = prompt("Enter product brand:");
    //       const image = prompt("Enter product image URL:");
    //       const description = prompt("Enter product description:");

    //       const newProduct = {
    //         name,
    //         category,
    //         price: parseFloat(price),
    //         brand,
    //         image,
    //         description,
    //         barcode,
    //       };

    //       const saveResponse = await fetch(
    //         "http://localhost:5000/api/products",
    //         {
    //           method: "POST",
    //           headers: { "Content-Type": "application/json" },
    //           body: JSON.stringify(newProduct),
    //         }
    //       );

    //       if (saveResponse.ok) {
    //         const savedProduct = await saveResponse.json();
    //         console.log("Product added successfully:", savedProduct);
    //         setProducts([...products, savedProduct]); // Update local state
    //         setSelectedProduct(savedProduct); // Display the added product in a popup
    //         setPopupMessage("Product added successfully!"); // Show success message
    //       } else {
    //         setErrorMessage("Failed to add product.");
    //       }
    //     }
     
    }
       else {
        setErrorMessage("Unexpected error occurred.");
      }
    } catch (err) {
      console.error("Error handling barcode:", err);
      setErrorMessage("Error occurred while processing barcode.");
    }
    onCloseScanner(); 
  };

  return (
    <div className="main-container">
      <section id="products" className="product-section">
        <h1 className="section-heading">Explore Our Exclusive Collection</h1>
        <p className="section-subheading">
          Browse our wide range of products and find the perfect item for you!
        </p>

        <div className="product-list">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
              <button
                onClick={() => {
                  setSelectedProduct(product); // Show product details
                  setPopupMessage(""); // Clear the message when manually viewing details
                }}
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {selectedProduct && (
          <ProductDetails
            product={selectedProduct}
            message={popupMessage} //
            onClose={() => setSelectedProduct(null)} 
          />
        )}

        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </section>

      {showScanner && (
        <BarcodeScanner
          onDetected={handleBarcodeDetected}
          onClose={onCloseScanner}
        />
      )}
      <Footer />
    </div>
  );
};

export default ProductList;
