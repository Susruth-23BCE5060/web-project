import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const styles = {
  container: {
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '2rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#333',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    marginBottom: '1rem',
  },
  item: {
    padding: '0.5rem 0',
    borderBottom: '1px solid #ccc',
  },
  total: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    marginBottom: '1rem',
    textAlign: 'right',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.75rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  select: {
    padding: '0.75rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

const Transaction = () => {
  const { cart } = useContext(CartContext);
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();

  const total = Array.isArray(cart)
    ? cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Order placed! Deliver to: ${address} | Payment Method: ${paymentMethod}`);
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title as React.CSSProperties}>Transaction Summary</h2>
      <ul style={styles.list}>
        {cart.map((item) => (
          <li key={item.id} style={styles.item}>
            {item.name} x {item.quantity} = ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <p style={styles.total as React.CSSProperties}>Total: ${total}</p>
      <form onSubmit={handleSubmit} style={styles.form as React.CSSProperties}>
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          style={styles.input as React.CSSProperties}
        />
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
          style={styles.select as React.CSSProperties}
        >
          <option value="" disabled>Select payment method</option>
          <option value="Google Pay">Google Pay</option>
          <option value="PhonePe">PhonePe</option>
          <option value="Paytm">Paytm</option>
          <option value="Cash on Delivery">Cash on Delivery</option>
        </select>
        <button type="submit" style={styles.button as React.CSSProperties}>Place Order</button>
      </form>
    </div>
  );
};

export default Transaction;
