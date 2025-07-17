import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import Logo from "../../assets/Homepage/svg/Logo.svg";
import Cart from "../../assets/Homepage/svg/Cart.svg";
import Home from "../../assets/Homepage/svg/Home.svg";
import CloseBtn from "../../assets/Homepage/png/CloseBtn.png";
import { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header" style={{ alignItems: isOpen ? "center" : "flex-start" }}>
      <Link to="/" className="logo">
        <img className="logo__img" src={Logo} alt="logo" />
        <p className="logo__link">
          Delizi<span className="logo__link--span">oso</span>
        </p>
      </Link>
      <nav className="nav">
        <ul className={`nav__list ${isOpen ? "active" : ""}`}> 
          <li className="nav__item">
            <NavLink to="/" className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}>
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="menu" className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}>
              Menu
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="AboutUs" className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}>
              About us
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/" className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}>
              Order online
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="Reservation" className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}>
              Reservation
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/" className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}>
              Contact us
            </NavLink>
          </li>
        </ul>
        <button
          className="header-container__close-btn"
          style={{ display: isOpen ? "flex" : "none" }}
          onClick={toggleMenu}
        >
          <img src={CloseBtn} alt="CloseBtn" className="header-container__close-btn-img" />
        </button>
      </nav>
      <div className="header-container" style={{ display: isOpen ? "none" : "flex" }}>
        <div className="header-container__cart">
          <img src={Cart} alt="Cart" className="header-container__cart-img" />
        </div>
        <button className="header-container__btn">
          <Link to="signin" className="header-container__btn-link">Log in</Link>
        </button>
        <button className="header-container__burger" onClick={toggleMenu}>
          <img src={Home} alt="Home" className="header-container__burger-img" />
        </button>
      </div>
    </header>
  );
};

export default Header;