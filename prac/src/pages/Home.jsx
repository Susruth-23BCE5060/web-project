
import { Link } from "react-router-dom";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home() {
  const [email, setEmail] = useState("");

  const featuredProducts = products.filter(product => product.featured);

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}!`);
    setEmail("");
  };

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Experience Sound Like Never Before</h1>
          <p>Discover premium headphones and accessories designed for audiophiles.</p>
          <Link to="/products" className="shop-button">Shop Now</Link>
        </div>
      </section>

      <section className="featured">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
        <Link to="/products" className="view-all">View All Products</Link>
      </section>

      <section className="testimonials">
        <h3>What Our Customers Say</h3>
        <div className="testimonial">
          <p><em>"The best headphones I've ever used! Crystal-clear sound and amazing comfort."</em></p>
          <strong>- John D.</strong>
        </div>
        <div className="testimonial">
          <p><em>"These headphones have completely changed how I listen to music."</em></p>
          <strong>- Sarah K.</strong>
        </div>
      </section>

      <section className="newsletter">
        <h3>Stay Updated!</h3>
        <p>Subscribe to our newsletter for exclusive deals and updates.</p>
        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
}

export default Home;
