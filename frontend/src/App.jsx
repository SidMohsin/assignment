import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";

function App() {
  const [showScanner, setShowScanner] = useState(false); // Controls the scanner visibility
  return (
    <div className="app">
      <Navbar onScanProduct={() => setShowScanner(true)} />
      <ProductList
        showScanner={showScanner}
        onCloseScanner={() => setShowScanner(false)}
      />
    </div>
  );
}

export default App;
