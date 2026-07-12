import { Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./Components/Layout/Layout";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Categories from "./pages/Categories/Categories";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      {/* Parent Route */}
      <Route path="/" element={<Layout />}>
        {/* Home Page */}
        <Route index element={<Home />} />

        {/* Other Pages */}
        <Route path="products" element={<Products />} />
        <Route path="categories" element={<Categories />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;