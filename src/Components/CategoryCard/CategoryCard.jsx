import styles from "./CategoryCard.module.css";

function CategoryCard({ title, icon }) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>{icon}</div>
      <h3>{title}</h3>
    </div>
  );
}

export default CategoryCard;
