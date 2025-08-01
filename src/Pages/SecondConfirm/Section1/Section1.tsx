import "./Section1.scss"
import Booking from "../../../assets/SecondConfirm/Svg/Booking.svg"
import Confirm from "../../../assets/SecondConfirm/Svg/Confirm.svg"
function Section1() {
  return (
    <section className="section1-secondConfirm">
        <div className="section1-container">
            <h1 className="section1-container__title">Reservation has been confirmed</h1>
            <div className="section1-cont">
                <div className="section1-cont__box">
                    <img src={Booking} alt="Booking" className="section1-cont__box-img" />
                    <p className="section1-cont__box-text">The confirmation result has been sent to your email</p>
                </div>
                <div className="section1-cont__box">
                    <img src={Confirm} alt="Confirm" className="section1-cont__box-img" />
                    <p className="section1-cont__box-text">Booking ID : 123456</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section1