import { Link } from "react-router-dom";
import useCart from "../context/useCart";

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  console.log('Cart Items:', cart);

  if (!cart || cart.length === 0) {
    return (
      <div>
        <h2 style={{ margin: "2rem 0 1rem 0" }}>Your cart is empty</h2>
        <p>You haven't added any items to your cart yet.</p>
        <Link to="/products">Browse Products</Link>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ margin: "2rem 0 1rem 0" }}>Your Cart</h2>
      <div>
        {cart.map((item) => (
          <div className="cart-item-row" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="cart-item-info">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-price">${item.price.toFixed(2)}</div>
            </div>
            <div className="cart-qty-controls">
              <button
                className="cart-qty-btn"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity === 1}
              >-</button>
              <span>{item.quantity}</span>
              <button
                className="cart-qty-btn"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >+</button>
            </div>
            <div className="cart-item-total">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
            <button
              className="cart-remove-btn"
              onClick={() => removeFromCart(item.id)}
              title="Remove"
            >&#128465;</button>
          </div>
        ))}
      </div>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <div>Subtotal: ${getCartTotal().toFixed(2)}</div>
        <div>Shipping: Free</div>
        <div>Total: ${getCartTotal().toFixed(2)}</div>
        <button className="summary-btn" onClick={clearCart}>Clear Cart</button>
        <button className="summary-btn">Checkout</button>
        <Link to="/products" style={{ marginLeft: 8 }}>Continue Shopping</Link>
      </div>
    </div>
  );
}

export default Cart;