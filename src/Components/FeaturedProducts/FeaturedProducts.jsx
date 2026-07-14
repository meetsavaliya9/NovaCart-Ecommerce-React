import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./FeaturedProducts.module.css";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <section className={styles.products}>
      <h2>Featured Products</h2>

      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.thumbnail}
            title={product.title}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;