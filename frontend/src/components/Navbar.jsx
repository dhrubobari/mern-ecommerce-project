import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartModal from "../pages/shop/CartModal";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  // console.log(products);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className="fixed-nav-bar w-nav">
      <nav className="max-w-screen-2x1 mx-auto px-4 flex justify-between items-center">
        {/* Navigation Links */}
        <ul className="nav__links flex items-center">
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="link">
            <Link to="/">Pages</Link>
          </li>
          <li className="link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Logo */}
        <div className="nav_logo">
          <Link to="/">
            <h2 className="text-base font-bold">E-Shop</h2>
          </Link>
        </div>

        {/* Navigation Icons */}
        <div className="nav_icons flex items-center">
          <span>
            <Link to="/search">
              <i className="ri-search-line"></i>
            </Link>
          </span>
          <span>
            <button onClick={handleCartToggle} className="hover:text-primary">
              <i className="ri-shopping-bag-line"></i>
              <sup className="text-sm inline-block px-1.5 text-white rounded-full bg-primary text-center">
                {products.length}
              </sup>
            </button>
          </span>
          <span>
            <Link to="login">
              <i className="ri-user-line"></i>
            </Link>
          </span>
        </div>
      </nav>

      {isCartOpen && (
        <CartModal
          products={products}
          isOpen={isCartOpen}
          onClose={handleCartToggle}
        >
          Cart modal
        </CartModal>
      )}
    </header>
  );
};

export default Navbar;
