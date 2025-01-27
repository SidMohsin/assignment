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



  ## Screenshots

  ### Homepage
    
![Screenshot 2025-01-27 123145](https://github.com/user-attachments/assets/00a53e41-b269-4167-91ff-f2e080fe7fa4)


![Screenshot 2025-01-27 123233](https://github.com/user-attachments/assets/d8d20c42-b76a-48f3-b401-e47cca8ba934)

![Screenshot 2025-01-27 124712](https://github.com/user-attachments/assets/f7126354-6476-4ad3-8819-3ece9fd25e48)


### Product Details View

![Screenshot 2025-01-27 123304](https://github.com/user-attachments/assets/7a9527c5-fc92-45e3-8efa-21c84a3c5fc3)

### Barcode Scanner

![Screenshot 2025-01-27 123359](https://github.com/user-attachments/assets/b3094b54-ade3-43e4-896f-2c7315c51552)

* **If Product is in Database**
  
    ![Screenshot 2025-01-27 123442](https://github.com/user-attachments/assets/a191a3e1-6c51-437e-a207-437a078b6137)

* **If Product is not in Database**
   
   ![Screenshot 2025-01-27 123517](https://github.com/user-attachments/assets/1b81206c-8c86-4838-ac87-dab39fe18b67)

