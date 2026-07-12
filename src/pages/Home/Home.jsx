import styles from "./Home.module.css";

import Hero from "../../Components/Hero/Hero";
import Categories from "../../Components/Categories/Categories";

function Home() {
  return (
    <main className={styles.home}>
      <Hero />
      <Categories />
    </main>
  );
}

export default Home;
