import "./Section1.scss"
import Booking from "../../../assets/SecondConfirm/Svg/Booking.svg"
function Section1() {
  return (
    <section className="section1-cancelConfirm">
        <h1 className="section1-cancelConfirm__title">Are you sure you want to cancel the reservation?</h1>
        <div className="section1-cancelConfirm__box">
            <img src={Booking} alt="Booking" className="section1-cancelConfirm__box-img" />
            <p className="section1-cancelConfirm__box-text">Booking ID : 123456</p>
        </div>
    </section>
  )
}

export default Section1