import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ onScanProduct }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="logo">My Store</h1>
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                    <li><a href="/">Home</a></li>
                    <li><a href="#products">Products</a></li>
                    <li>
                        <button className="nav-button" onClick={onScanProduct}>
                            Scan Product
                        </button>
                    </li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;