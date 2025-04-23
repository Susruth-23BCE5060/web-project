import { Link } from "react-router-dom";
import useCart from "../context/useCart";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e) => {
    e.preventDefault();
    console.log('Adding to cart:', product);
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };
  
  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.name} 
        className="product-image"
      />
      <div className="product-content">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-description">{product.description}</p>
        <div className="product-buttons">
          <Link to={`/products/${product.id}`} className="view-button">
            View Details
          </Link>
          <button 
            onClick={handleAddToCart} 
            className="cart-button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
