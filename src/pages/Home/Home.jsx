import styles from "./Home.module.css";

import Hero from "../../Components/Hero/Hero";
import Categories from "../../Components/Categories/Categories";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";

function Home() {
  return (
    <main className={styles.home}>
      <Hero />
      <Categories />
      <FeaturedProducts />
    </main>
  );
}

export default Home;
