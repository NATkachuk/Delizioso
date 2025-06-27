import "./Section4.scss"
import Table1 from "../../../assets/Homepage/png/Table1.png"
import Table2 from "../../../assets/Homepage/png/Table2.png"
import Table3 from "../../../assets/Homepage/png/Table3.png"

function Section4() {
  return (
    <section className="section4">
        <div className="section4-box1">
            <img src={Table1} alt="Table1" className="section4-box1__img1" />
            <img src={Table2} alt="Table2" className="section4-box1__img2" />
            <img src={Table3} alt="Table3" className="section4-box1__img3" />
        </div>
        <div className="section4-box2">
            <div className="section4-box2__textbox">
                <h2 className="section4-box2__textbox-title">Let's reserve <span className="section4-box2__textbox-title--orange">a table</span></h2>
                <p className="section4-box2__textbox-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
            </div>
            <button className="section4-box2__btn button">Reservation</button> 
        </div>
        
    </section>
  )
}

export default Section4