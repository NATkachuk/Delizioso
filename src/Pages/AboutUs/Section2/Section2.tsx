import "./Section2.scss"
import Owner from "../../../assets/About/png/Owner.png"
import quotes1 from "../../../assets/About/svg/quotes1.svg"
import quotes2 from "../../../assets/About/svg/quotes2.svg"
function Section2() {
  return (
    <section className="section2-about">
        <img src={Owner} alt="Owner" className="section2-about__img" />
        <div className="section2-container">
            <div className="section2-container__textbox">
                <h2 className="section2-container__textbox-title"><span className="section2-container__textbox-title--orange">Owner</span> & Executive Chef</h2>
                <p className="section2-container__textbox-text">Ismail Marzuki</p>
            </div>
            <div className="section2-container__box">
                <img src={quotes1} alt="quotes1" className="section2-container__box-img1" />
                <p className="section2-container__box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <img src={quotes2} alt="quotes2" className="section2-container__box-img2" />
            </div>
        </div>
    </section>
  )
}

export default Section2