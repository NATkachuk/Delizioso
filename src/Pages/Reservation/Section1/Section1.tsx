import "./Section1.scss"
import Reservation1 from "../../../assets/Reservation/png/Reservation1.png"
import { Link } from "react-router-dom"
function Section1() {
  return (
    <section className="section1-reservation">
        <img src={Reservation1} alt="Reservation1" className="section1-reservation__img" />
        <form  className="reservation-form">
            <h1 className="reservation-form__title">Book a table</h1>
             <select name="Date"  className="reservation-form__item">
                <option value="1" selected>Date</option>
                <option value="2">22.06.2025</option>
                <option value="3">1.07.2025</option>
                <option value="4">7.08.2025</option>
                <option value="5">15.09.2025</option>
                <option value="6">28.10.2025</option>
                <option value="7">7.11.2025</option>
                <option value="8">15.12.2025</option>
                <option value="9">9.01.2026</option>
                <option value="10">17.02.2026</option>
                <option value="11">25.03.2026</option>
                <option value="12">2.04.2026</option>
             </select>
             <select name="Time"  className="reservation-form__item">
                <option value="1" selected>Time</option>
                <option value="2">09:00</option>
                <option value="3">10:00</option>
                <option value="4">11:00</option>
                <option value="5">12:00</option>
                <option value="6">13:00</option>
                <option value="7">14:00</option>
                <option value="8">15:00</option>
                <option value="9">16:00</option>
                <option value="10">17:00</option>
                <option value="11">18:00</option>
                <option value="12">19:00</option>
                <option value="13">20:00</option>
                <option value="14">21:00</option>
                <option value="15">22:00</option>
             </select>
             <select name="Party size"  className="reservation-form__item">
                <option value="1" selected>Party size</option>
                <option value="2">1</option>
                <option value="3">2</option>
                <option value="4">3</option>
                <option value="5">4</option>
                <option value="6">5</option>
                <option value="7">6</option>
                <option value="8">7</option>
                <option value="9">8</option>
                <option value="10">9</option>
                <option value="11">10</option>
                <option value="12">11</option>
                <option value="13">12</option>
                <option value="14">13</option>
                <option value="15">14</option>
                <option value="16">15</option>
             </select>
             <button type="submit" className="reservation-form__btn button"><Link to="confirm" className="reservation-form__btn-link">Book now</Link></button>
        </form>
    </section>
  )
}

export default Section1