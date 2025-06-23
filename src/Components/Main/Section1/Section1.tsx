import "./Section1.scss"
import Pasta from "../../../assets/Homepage/png/Pasta.png"
function Section1() {
  return (
    <section className="section1">
        <div className="section1-container">
            <div className="section1-container__box">
                <p className="section1-container__box-text">Restauran</p>
            </div>
            <h1 className="section1-container__title">Italian Cuisine</h1>
            <p className="section1-container__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus dictum arcu sit tristique donec eget.</p>
            <div className="section1-container__buttons">
                <button className="section1-container__buttons-btn1">Order now</button>
                <button className="section1-container__buttons-btn2">Reservation</button>
            </div>
        </div>
        <img src={Pasta} alt="Pasta" className="section1__img" />
    </section>
  )
}

export default Section1