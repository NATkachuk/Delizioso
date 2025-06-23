import "./Section2.scss"
import Salad from "../../../assets/Homepage/png/Salad.png"

function Section2() {
  return (
    <section className="section2">
        <img src={Salad} alt="Salad" className="section2__img" />
        <div className="section2-container">
            <div className="section2-container__textbox">
                <h2 className="section2-container__textbox-title">Welcome to <span className="section2-container__textbox-title--orange">delizioso</span></h2>
                <p className="section2-container__textbox-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
            </div>
            <button className="section2-container__btn button">See our menu</button>
        </div>
    </section>
  )
}

export default Section2