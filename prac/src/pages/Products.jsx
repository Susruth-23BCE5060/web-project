
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Products() {
  const [search, setSearch] = useState("");
  const filtered = products.filter(
    p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="products-page">
      <h1>Our Products</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="product-grid">
        {filtered.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
}
export default Products;
