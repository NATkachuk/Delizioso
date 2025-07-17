import "./Section1.scss"
import AboutImg1 from "../../../assets/About/png/AboutImg1.png"
import AboutImg2 from "../../../assets/About/png/AboutImg2.png"

function Section1() {
  return (
    <section className="section1-about">
        <div className="section1-box">
            <img src={AboutImg1} alt="AboutImg1" className="section1-box__img" />
            <div className="section1-box__textbox">
                <h2 className="section1-box__textbox-title"><span className="section1-box__textbox-title--orange">Our</span><br />restautant</h2>
                <p className="section1-box__textbox-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
            </div>
        </div>
        <div className="section1-box section1-box--reverse">
            <p className="section1-box__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
            <img src={AboutImg2} alt="AboutImg2" className="section1-box__img" />
        </div>
    </section>
  )
}

export default Section1