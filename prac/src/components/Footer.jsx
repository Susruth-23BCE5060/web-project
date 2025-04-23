import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <b>HeadphonesShop</b>
          <div>Providing quality audio products since 2020.</div>
        </div>
        <div className="footer-section">
          <b>Quick Links</b>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <b>Contact Us</b>
          <div>
            123 Tech Park, Sholinganallur, Chennai, Tamil Nadu 600119<br />
            info@headphoneshop.example<br />
            +91 (44) 4567-8901
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 HeadphonesShop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
