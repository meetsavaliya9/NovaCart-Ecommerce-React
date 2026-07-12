import styles from "./Hero.module.css";
import heroImage from "../../assets/Images/hero.png";
import { FaFire } from "react-icons/fa";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <span className={styles.tag}>
          <FaFire /> Best Deals Every Day 
        </span> 

        <h1>
          Shop Smarter,
          <br />
          Live Better.
        </h1>

        <p>
          Discover premium products with unbeatable prices, fast delivery, and
          trusted quality.
        </p>

        <div className={styles.buttons}>
          <button className={styles.shopBtn}>Shop Now</button>

          <button className={styles.exploreBtn}>Explore</button>
        </div>
      </div>

      <div className={styles.right}>
        <img src={heroImage} />
      </div>
    </section>
  );
}

export default Hero;
