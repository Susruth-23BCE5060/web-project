import { Link } from "react-router-dom";
import useCart from "../context/useCart";

function Navbar() {
  const { cartItems } = useCart();

  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="brand">
          HeadphonesShop
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
