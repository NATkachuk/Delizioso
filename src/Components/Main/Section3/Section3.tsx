import "./Section3.scss"
import {products} from "../../../Data/Data";
import type {Product} from "../../../Data/Data";
import { NavLink } from "react-router";
import LeftArrow from "../../../assets/Homepage/svg/LeftArrow.svg"
import RightArrow from "../../../assets/Homepage/svg/RightArrow.svg"
import more from "../../../assets/Homepage/svg/more.svg"
import Star from "../../../assets/Homepage/svg/Star.svg"
function Section3() {
  return (
   <section className="section3">
    <h2 className="section3__title">Our popular menu</h2>
    <div className="section3-container">
        <ul className="section3-container__list1">
            <li className="section3-container__list1-item">
                <NavLink className="section3-container__list1-item-link" to="/">All catagory</NavLink>
            </li>
            <li className="section3-container__list1-item">
                <NavLink className="section3-container__list1-item-link" to="/">Dinner</NavLink>
            </li>
            <li className="section3-container__list1-item">
               <NavLink className="section3-container__list1-item-link" to="/">Lunch</NavLink>
            </li>
            <li className="section3-container__list1-item">
                <NavLink className="section3-container__list1-item-link" to="/">Dessert</NavLink>
            </li>
            <li className="section3-container__list1-item">
               <NavLink className="section3-container__list1-item-link" to="/">Drink</NavLink>
            </li>
        </ul>
        <ul className="section3-container__list2">
            {products.map((product: Product) => (
                <li className="section3-container__list2-item" key={product.id}>
                    <img src={product.imageUrl} alt={product.name} className="section3-container__list2-item-img" />
                    <h3 className="section3-container__list2-item-title">{product.name}</h3>
                    <div className="section3-container__list2-item-imags">
                        <img src={Star} alt="Star" className="section3-container__list2-item-imags-img" />
                        <img src={Star} alt="Star" className="section3-container__list2-item-imags-img" />
                        <img src={Star} alt="Star" className="section3-container__list2-item-imags-img" />
                        <img src={Star} alt="Star" className="section3-container__list2-item-imags-img" />
                    </div>
                    <p className="section3-container__list2-item-text">{product.description}</p>
                    <div className="section3-container__list2-item-price">
                        <p className="section3-container__list2-item-price-text">$12.05</p>
                        <button className="section3-container__list2-item-price-btn">Order now</button>
                    </div>
                </li>
            ))}
        </ul>
        <div className="section3-container__box">
            <button className="section3-container__box-btn1"><img src={LeftArrow} alt="LeftArrow" className="section3-container__box-btn1-img" /></button>
            <button className="section3-container__box-btn2">1</button>
            <button className="section3-container__box-btn2">2</button>
            <button className="section3-container__box-btn2">3</button>
            <button className="section3-container__box-btn3"><img src={more} alt="more" className="section3-container__box-btn3-img" /></button>
            <button className="section3-container__box-btn1"><img src={RightArrow} alt="RightArrow" className="section3-container__box-btn1-img" /></button>
        </div>
    </div>
   </section>
  )
}

export default Section3