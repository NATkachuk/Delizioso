import "./Section3.scss";
import { products } from "../../../Data/Data";
import type { Product } from "../../../Data/Data";
import { NavLink } from "react-router-dom";
import LeftArrow from "../../../assets/Homepage/svg/LeftArrow.svg";
import RightArrow from "../../../assets/Homepage/svg/RightArrow.svg";
import Star from "../../../assets/Homepage/svg/Star.svg";
import { useState } from "react";

function Section3() {
  const [currentCategory, setCurrentCategory] = useState("All category");
  const [currentPage, setCurrentPage] = useState(0);

  
  const filteredProducts = currentCategory === "All category"
    ? products
    : products.filter((product) => product.category === currentCategory);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page);
    }
  };

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
    setCurrentPage(0); 
  };

  return (
    <section className="section3">
      <h2 className="section3__title">Our popular menu</h2>
      <div className="section3-container">
        <ul className="section3-container__list1">
          {["All category", "Dinner", "Lunch", "Dessert", "Drink"].map((category) => (
            <li key={category} className="section3-container__list1-item">
              <button
                className={
                  currentCategory === category
                    ? "section3-container__list1-item-link section3-container__list1-item-link--active"
                    : "section3-container__list1-item-link"
                }
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
        <ul className="section3-container__list2">
          {filteredProducts.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((product: Product) => (
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
                <button className="section3-container__list2-item-price-btn">+</button>
              </div>
            </li>
          ))}
        </ul>
        <div className="section3-container__box">
          <button className="section3-container__box-btn1" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 0}>
            <img src={LeftArrow} alt="LeftArrow" className="section3-container__box-btn1-img" />
          </button>
          <button className="section3-container__box-btn2" onClick={() => handlePageChange(0)} disabled={currentPage === 0}>1</button>
          <button className="section3-container__box-btn2" onClick={() => handlePageChange(1)} disabled={currentPage === 1}>2</button>
          <button className="section3-container__box-btn2" onClick={() => handlePageChange(2)} disabled={currentPage === 2}>3</button>
          <button className="section3-container__box-btn2" onClick={() => handlePageChange(3)} disabled={currentPage === 3}>4</button>
          <button className="section3-container__box-btn2" onClick={() => handlePageChange(4)} disabled={currentPage === 4}>5</button>
          <button className="section3-container__box-btn1" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages - 1}>
            <img src={RightArrow} alt="RightArrow" className="section3-container__box-btn1-img" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section3;