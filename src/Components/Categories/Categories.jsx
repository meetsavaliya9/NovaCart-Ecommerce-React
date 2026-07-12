import styles from "./Categories.module.css";
import CategoryCard from "../CategoryCard/CategoryCard";

function Categories() {
  const categories = [
    {
      id: 1,
      title: "Electronics",
      icon: "📱",
    },
    {
      id: 2,
      title: "Fashion",
      icon: "👕",
    },
    {
      id: 3,
      title: "Books",
      icon: "📚",
    },
    {
      id: 4,
      title: "Grocery",
      icon: "🛒",
    },
    {
      id: 5,
      title: "Beauty",
      icon: "💄",
    },
    {
      id: 6,
      title: "Home",
      icon: "🏠",
    },
  ];

  return (
    <section className={styles.categories}>
      <h2>Shop by Categories</h2>
      <p>Explore our most popular product categories.</p>

      <div className={styles.grid}>
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            icon={category.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default Categories;