import { NavLink } from "react-router-dom"
import "./Nav.scss"

function Nav() {
  return (
    <nav className="nav">
        <ul className="nav__list">
            <li className="nav__item">
                <NavLink to="/" className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`} >Home</NavLink>
            </li>
            <li className="nav__item">
                <NavLink to="/" className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}>Menu</NavLink>
            </li>
            <li className="nav__item">
                <NavLink to="/"className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}>About us</NavLink>
            </li>
            <li className="nav__item">
                <NavLink to="/" className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}>Order online</NavLink>
            </li>
            <li className="nav__item">
                <NavLink to="/" className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}>Reservation</NavLink>
            </li>
            <li className="nav__item">
                <NavLink to="/" className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}>Contact us</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Nav