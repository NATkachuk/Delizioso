import "./Footer.scss"
import { Link } from "react-router-dom"
import Logo from "../../assets/Homepage/svg/Logo.svg"
import twitter from "../../assets/Homepage/svg/twitter.svg"
import Facebook from "../../assets/Homepage/svg/Facebook.svg"
import Instagram from "../../assets/Homepage/svg/Instagram.svg"
function Footer() {
  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-container__box">
                <Link to="/" className="logo">
                    <img className="logo__img" src={Logo} alt="logo" />
                     <p  className="logo__link">Delizi<span className="logo__link--span">oso</span></p>
                </Link>
                <p className="footer-container__box-text">Viverra gravida morbi egestas facilisis tortor netus non duis tempor. </p>
                <div className="footer-container__box-socials">
                    <img src={twitter} alt="twitter" className="footer-container__box-socials-img" />
                    <img src={Facebook} alt="Facebook" className="footer-container__box-socials-img" />
                    <img src={Instagram} alt="Instagram" className="footer-container__box-socials-img" />
                </div>
            </div>
            <div className="footer-container__box2">
                <ul className="footer-container__box2-list">
                     <h3 className="footer-container__box2-list-title">Page</h3>
                    <li className="footer-container__box2-item">
                        <Link to="/" className="footer-container__box2-link">Home</Link>
                    </li>
                    <li className="footer-container__box2-item">
                        <Link to="/" className="footer-container__box2-link">Menu</Link>
                    </li>
                    <li className="footer-container__box2-item">
                        <Link to="/" className="footer-container__box2-link">Order online</Link>
                    </li>
                    <li className="footer-container__box2-item">
                        <Link to="/" className="footer-container__box2-link">Catering</Link>
                    </li>
                    <li className="footer-container__box2-item">
                        <Link to="/" className="footer-container__box2-link">Reservation</Link>
                    </li>
                </ul>
                 <ul className="footer-container__box2-list">
                     <h3 className="footer-container__box2-list-title">Information</h3>
                    <li className="footer-container__box2-item">
                        <Link to="/" className="footer-container__box2-link">About us</Link>
                    </li>
                    <li className="footer-container__box2-item">
                        <Link to="/" className="footer-container__box2-link">Testimonial</Link>
                    </li>
                    <li className="footer-container__box2-item">
                        <Link to="/" className="footer-container__box2-link">Event</Link>
                    </li>
                </ul>
                 <ul className="footer-container__box2-list">
                     <h3 className="footer-container__box2-list-title">Get in touch</h3>
                    <li className="footer-container__box2-item">
                        <Link to="/" className="footer-container__box2-link">3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat</Link>
                    </li>
                    <li className="footer-container__box2-item">
                        <Link to="/" className="footer-container__box2-link">delizioso@gmail.com</Link>
                    </li>
                    <li className="footer-container__box2-item">
                        <Link to="/"  className="footer-container__box2-link">+123 4567 8901</Link>
                    </li>
                </ul>
            </div>
        </div>
        <p className="footer__text">Copyright © 2022 Delizioso</p>
    </footer>
  )
}

export default Footer