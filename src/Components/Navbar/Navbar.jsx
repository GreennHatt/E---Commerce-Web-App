import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../Assets/logo.png";
import cart_icon from "../../Assets/cart_icon.png";
import dropdown_icon from "../../Assets/dropdown_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { getTotalCartItems, currentUser, logout } = useContext(ShopContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const activeFor = (paths) => paths.includes(location.pathname);

  const toggleMenu = () => {
    menuRef.current.classList.toggle("nav-menu-visible");
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/" style={{ textDecoration: "none" }} className="nav-logo-link">
          <img src={logo} alt="logo" />
          <p>SHOPPER</p>
        </Link>
      </div>

      <img
        className="nav-dropdown"
        src={dropdown_icon}
        alt="menu"
        onClick={toggleMenu}
      />

      <ul ref={menuRef} className="nav-menu">
        <li>
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {activeFor(["/"]) ? <hr /> : <></>}
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>
          {activeFor(["/mens"]) ? <hr /> : <></>}
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/women">
            Women
          </Link>
          {activeFor(["/women"]) ? <hr /> : <></>}
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>
          {activeFor(["/kids"]) ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-login-cart">
        {currentUser ? (
          <>
            <span className="nav-greeting">Hi, {currentUser.name}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        <Link to="/cart">
          <img src={cart_icon} alt="cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
