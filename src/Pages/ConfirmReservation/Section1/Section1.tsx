import React, { useState } from "react";
import "./Section1.scss";
import { countries} from "../../../Data/Country";
import type { Country } from "../../../Data/Country";
import calender from "../../../assets/ConfirmReserv/svg/calender.svg"
import Time from "../../../assets/ConfirmReserv/svg/Time.svg"
import people from "../../../assets/ConfirmReserv/svg/people.svg"

const Section1: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const selectCountry = (country: Country) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
  };

  return (
    <section className="section1-confirm">
      <h1 className="section1-confirm__title">Reservation</h1>
      <div className="section1-container">
        <p className="section1-container__text">
          Due to limited availability, we can hold this table for you for 5:00 minutes
        </p>
      </div>
      <div className="section1-container2">
        <form action="" className="form">
          <p className="form-text">Data order</p>
          <input placeholder="First name" className="form-input" />
          <input placeholder="Last name" className="form-input" />

          <div className="form-phone">
            <div className="form-phone__dropdown" onClick={toggleDropdown}>
              <img
                src={selectedCountry.flag}
                alt={selectedCountry.name}
                className="form-phone__flag"
              />
              <span className="form-phone__code">{selectedCountry.code}</span>
              <span className="form-phone__arrow">▼</span>
            </div>
            {dropdownOpen && (
              <ul className="form-phone__list">
                {countries.map((country) => (
                  <li
                    key={country.name}
                    className="form-phone__item"
                    onClick={() => selectCountry(country)}
                  >
                    <img
                      src={country.flag}
                      alt={country.name}
                      className="form-phone__flag"
                    />
                    <span>{country.code}</span>
                  </li>
                ))}
              </ul>
            )}
            <input
              placeholder="Phone number"
              className="form-input"
              style={{ marginLeft: "10px" }}
            />
          </div>
          <input type="email" placeholder="Email" className="form-input" />
          <textarea placeholder="Add a special request" className="form-textarea" name="request" rows={8} cols={40}></textarea>
          <div className="form-box">
            <input type="radio" className="form-box__input" />
            <p className="form-box__text">Sign me up to receive dining offers and news from this restaurant by email.</p>
          </div>
          <button className="form-button">Confirm reservation</button>
        </form>
        <div className="section1-container2__box">
          <div className="section1-container2__box-cont1">
              <p className="section1-container2__box-cont1-text">Reservation detail</p>
              <div className="section1-container2__box-cont1-wrap">
                <img src={calender} alt="calender" className="section1-container2__box-cont1-wrap-img" />
                <p className="section1-container2__box-cont1-wrap-text">Saturday, 28 february 2022</p>
              </div>
              <div className="section1-container2__box-cont1-wrap">
                <img src={Time} alt="Time" className="section1-container2__box-cont1-wrap-img" />
                <p className="section1-container2__box-cont1-wrap-text">04:30 pm</p>
              </div>
              <div className="section1-container2__box-cont1-wrap">
                <img src={people} alt="people" className="section1-container2__box-cont1-wrap-img" />
                <p className="section1-container2__box-cont1-wrap-text">2 people (Standar seating)</p>
              </div>
          </div>
          <div className="section1-container2__box-cont2">
            <p className="section1-container2__box-cont2-text">Restaurant informations</p>
            <div className="section1-container2__box-cont2-textbox">
              <p className="section1-container2__box-cont2-textbox-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              <p className="section1-container2__box-cont2-textbox-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;