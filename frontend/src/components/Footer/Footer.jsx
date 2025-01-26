import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer-container">
                <div className="footer-about">
                    <h3>About Us</h3>
                    <p>
                        We offer a wide variety of quality products at affordable prices.
                        Contact us for more information.
                    </p>
                </div>
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p>Email: mystore@gmail.com</p>
                    <p>Phone: +1-234-567-890</p>
                </div>
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            Facebook
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            Twitter
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 My Store. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;