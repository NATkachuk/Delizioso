import './Section2.scss'
import table from "../../../assets/SecondConfirm/png/table.png"
import calender from "../../../assets/SecondConfirm/svg/calender.svg"
import time from "../../../assets/SecondConfirm/svg/time.svg"
import people from "../../../assets/SecondConfirm/svg/people.svg"
import { Link } from 'react-router-dom'
function Section2() {
  return (
   <section className="section2-cancelConfirm">
    <div className="section2-container">
        <img src={table} alt="table" className="section2-container__img" />
        <div className="section2-container__wrap">
            <h2 className="section2-container__wrap-title"> <strong>Reservation detail</strong></h2>
            <div className="section2-container__wrap-box">
                <img src={calender} alt="calender" className="section2-container__wrap-box-img" />
                <p className="section2-container__wrap-box-text">Saturday,28 february 2022</p>
            </div>
            <div className="section2-container__wrap-box">
                <img src={time} alt="time" className="section2-container__wrap-box-img" />
                <p className="section2-container__wrap-box-text">04:30 pm</p>
            </div>
            <div className="section2-container__wrap-box">
                <img src={people} alt="people" className="section2-container__wrap-box-img" />
                <p className="section2-container__wrap-box-text">2 people (Standar seating)</p>
            </div>
        </div>
    </div>
    <button className="section2-cancelConfirm__btn"><Link className='section2-cancelConfirm__btn-link' to="/Reservation"> Cancel reservation</Link></button>
   </section>
  )
}

export default Section2