# Product Display web Application with Barcode Scanner

This project is a React.js and Node.js application that allows users to scan barcodes, check product availability in the database. It includes a clean and responsive UI with product details displayed in a popup modal.

## Features

 *  **Barcode Scanning:** 
Scan product barcodes using Quagga.js and check if the product exists in the database.

* **Product Management:**  View all available products in the database. Display product details in a responsive popup modal.

* **Responsive Design:**  Works seamlessly on all devices (desktop, tablet, and mobile).

* **Backend with MongoDB:** RESTful API to manage products.
MongoDB database for storing product details.



## Technologies Used

* **Frontend:**
   - **React.js:** For building the user interface.
  -  **Quagga.js:** For barcode scanning.
  -  **CSS:** For styling the application.


* **Backend:** 
  - **Node.js:** Backend runtime.
  - **MongoDB:** NoSQL database for storing product data.
  - **Mongoose:** Object Data Modeling (ODM) library for MongoDB.


## Prerequisites

* **Node.js:** Install Node.js.

* **MongoDB:** Install MongoDB and ensure it is running locally.


## Installation

1. **Clone the repository:**

    git clone https://github.com/SidMohsin/assignment.git
   
    cd assignment


3. **Install dependencies for the backend:**

   cd backend

   npm install


4. **Install dependencies for the frontend:**

   cd frontend

   npm install






## Running the Project

### Start the backend

1. **Ensure MongoDB is running locally:**

   mongod


2. **Start the backend server:**

   cd backend
   
   nodemon server.js



### Start the Frontend

1. **Start the frontend development server:**

    cd frontend
   
    npm start


2. **Open your browser and navigate to:**

   http://localhost:3000





## Project Structure

**Backend (/backend)**

* **server.js:** Main entry point for the Node.js backend.

* **models/Products.js:** Mongoose schema for the products.


**Frontend (/frontend)**

* **components/ProductList.js:** Displays all products and handles barcode scanning.

* **components/BarcodeScanner.js:** Handles real-time barcode scanning using Quagga.js.

* **components/ProductDetails.js:** Displays product details in a popup modal.

* **App.js:** Main application file.





## Usage

  1. **Scan a Product Barcode:**

  Click the "Scan Product" button in the navbar.

  Use your device's camera to scan the product barcode.



  2. **Product Found:**

  If the product exists in the database, its details will be displayed in a popup.



  3. **Product Not Found:**

  If the product is not found, you'll be alert that product not found.





  4. **View All Products:**

  Scroll through the product list on the homepage.





