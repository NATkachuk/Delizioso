import "./MenuSection.scss";
import { products } from "../../../Data/Data";
import type { Product } from "../../../Data/Data";
import LeftArrow from "../../../assets/Homepage/svg/LeftArrow.svg";
import RightArrow from "../../../assets/Homepage/svg/RightArrow.svg";
import Star from "../../../assets/Homepage/svg/Star.svg";
import { useState } from "react";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";

function MenuSection() {
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
    <>
        <section className="menu">
        <h2 className="menu__title">Menu</h2>
        <div className="menu-container">
            <ul className="menu-container__list1">
            {["All category", "Dinner", "Lunch", "Dessert", "Drink"].map((category) => (
                <li key={category} className="menu-container__list1-item">
                <button
                    className={
                    currentCategory === category
                        ? "menu-container__list1-item-link menu-container__list1-item-link--active"
                        : "menu-container__list1-item-link"
                    }
                    onClick={() => handleCategoryChange(category)}
                >
                    {category}
                </button>
                </li>
            ))}
            </ul>
            <ul className="menu-container__list2">
            {filteredProducts.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((product: Product) => (
                <li className="menu-container__list2-item" key={product.id}>
                <img src={product.imageUrl} alt={product.name} className="menu-container__list2-item-img" />
                <h3 className="menu-container__list2-item-title">{product.name}</h3>
                <div className="menu-container__list2-item-imags">
                    <img src={Star} alt="Star" className="menu-container__list2-item-imags-img" />
                    <img src={Star} alt="Star" className="menu-container__list2-item-imags-img" />
                    <img src={Star} alt="Star" className="menu-container__list2-item-imags-img" />
                    <img src={Star} alt="Star" className="menu-container__list2-item-imags-img" />
                </div>
                <p className="menu-container__list2-item-text">{product.description}</p>
                <div className="menu-container__list2-item-price">
                    <p className="menu-container__list2-item-price-text">$12.05</p>
                    <button className="menu-container__list2-item-price-btn">+</button>
                </div>
                </li>
            ))}
            </ul>
            <div className="menu-container__box">
            <button className="menu-container__box-btn1" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 0}>
                <img src={LeftArrow} alt="LeftArrow" className="menu-container__box-btn1-img" />
            </button>
            <button className="menu-container__box-btn2" onClick={() => handlePageChange(0)} disabled={currentPage === 0}>1</button>
            <button className="menu-container__box-btn2" onClick={() => handlePageChange(1)} disabled={currentPage === 1}>2</button>
            <button className="menu-container__box-btn2" onClick={() => handlePageChange(2)} disabled={currentPage === 2}>3</button>
            <button className="menu-container__box-btn2" onClick={() => handlePageChange(3)} disabled={currentPage === 3}>4</button>
            <button className="menu-container__box-btn2" onClick={() => handlePageChange(4)} disabled={currentPage === 4}>5</button>
            <button className="menu-container__box-btn1" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages - 1}>
                <img src={RightArrow} alt="RightArrow" className="menu-container__box-btn1-img" />
            </button>
            </div>
        </div>
        </section>
    </>
  );
}

export default MenuSection;