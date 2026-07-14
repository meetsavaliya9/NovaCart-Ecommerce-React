import styles from "./ProductCard.module.css";

function ProductCard({
  image,
  title,
  price,
  rating,
}) {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={image}
          alt={title}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <p className={styles.price}>₹{price}</p>

        <p className={styles.rating}>
          ⭐ {rating}
        </p>

        <button className={styles.cartBtn}>
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;