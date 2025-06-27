import "./Section5.scss"
import BetranKomar from "../../../assets/Homepage/png/BetranKomar.png"
import FerrySauwi from "../../../assets/Homepage/png/FerrySauwi.png"
import IswanDracho from "../../../assets/Homepage/png/IswanDracho.png"
function Section5() {
  return (
    <section className="section5">
        <h2 className="section5__title">Our greatest chef</h2>
        <div className="section5-wrap">
            <div className="section5-box">
                <img src={BetranKomar} alt="BetranKomar" className="section5-box__img" />
                <p className="section5-box__text1">Betran Komar</p>
                <p className="section5-box__text2">Head chef</p>
            </div>
            <div className="section5-box">
                <img src={FerrySauwi} alt="FerrySauwi" className="section5-box__img" />
                <p className="section5-box__text1">Ferry Sauwi</p>
                <p className="section5-box__text2">Chef</p>
            </div>
            <div className="section5-box">
                <img src={IswanDracho} alt="iswanDracho" className="section5-box__img" />
                <p className="section5-box__text1">Iswan Dracho</p>
                <p className="section5-box__text2">Chef</p>
            </div>
        </div>
        <button className="section5__btn button">View all</button>
    </section>
  )
}

export default Section5