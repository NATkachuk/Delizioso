import { Link } from "react-router-dom"
import "./Header.scss"
import Logo from "../../assets/Homepage/svg/Logo.svg"
import Nav from "./Nav/Nav"
import Cart from "../../assets/Homepage/svg/Cart.svg"
function Header() {
  return (
    <header className="header">
        <Link to="/" className="logo">
            <img className="logo__img" src={Logo} alt="logo" />
            <p  className="logo__link">Delizi<span className="logo__link--span">oso</span></p>
        </Link>
        <Nav />
        <div className="header-container">
            <div className="header-container__cart">
                <img src={Cart} alt="Cart" className="header-container__cart-img" />
            </div>
            <button className="header-container__btn">
                <Link to="signin" className="header-container__btn-link">Log in</Link>
            </button>
        </div>
    </header>
  )
}

export default Header