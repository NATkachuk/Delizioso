
import "./Section2.scss"
import table from "../../../assets/SecondConfirm/png/table.png"
import calender from "../../../assets/SecondConfirm/svg/calender.svg"
import time from "../../../assets/SecondConfirm/svg/time.svg"
import people from "../../../assets/SecondConfirm/svg/people.svg"
import modify from "../../../assets/SecondConfirm/svg/modify.svg"
import cancel from "../../../assets/SecondConfirm/svg/cancel.svg"
function Section2() {
  return (
    <section className="section2-SecondConfirm">
        <div className="section2-container">
            <img src={table} alt="table" className="section2-container__img" />
            <div className="section2-box">
                <h2 className="section2-box__title">Reservation detail</h2>
                <div className="section2-box__cont">
                    <img src={calender} alt="calender" className="section2-box__cont-img" />
                    <p className="section2-box__cont-text">Saturday, 28 february 2022</p>
                </div>
                <div className="section2-box__cont">
                    <img src={time} alt="time" className="section2-box__cont-img" />
                    <p className="section2-box__cont-text">04:30 pm</p>
                </div>
                <div className="section2-box__cont">
                    <img src={people} alt="people" className="section2-box__cont-img" />
                    <p className="section2-box__cont-text">2 people (Standart seating)</p>
                </div>
            </div>
            <div className="section2-container__buttons">
                <button className="section2-container__buttons-btn1">Modify <img src={modify} alt="modify" className="section2-container__buttons-btn-img" /></button>
                <button className="section2-container__buttons-btn2">Cancel <img src={cancel} alt="cancel" className="section2-container__buttons-btn-img" /></button>
            </div>
        </div>
    </section>
  )
}

export default Section2