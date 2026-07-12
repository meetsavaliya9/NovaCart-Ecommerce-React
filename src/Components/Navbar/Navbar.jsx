import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.css";
function Navbar() {
  const getNavLinkClass = ({ isActive }) => (isActive ? styles.active : "");
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>
        <Link to="/">NovaCart</Link>
      </h1>
      <ul className={styles.navLinks}>
        <li>
          <NavLink
            to="/"
            className={getNavLinkClass}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={getNavLinkClass}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories"
            className={getNavLinkClass}
          >
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={getNavLinkClass}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={getNavLinkClass}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <ul className={styles.actions}>
        <li>
          <NavLink
            to="/wishlist"
            className={getNavLinkClass}
          >
            WishList
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={getNavLinkClass}
          >
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={getNavLinkClass}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
