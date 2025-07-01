import "./Section6.scss"

function Section6() {
  return (
   <section className="section6">
    <div className="section6-wrap">
        <h2 className="section6__title">we are open from</h2>
        <p className="section6__text">Monday-Sunday</p>
        <div className="section6__textbox">
            <p className="section6__textbox-text">Launch : Mon-Sun : 11:00am-02:00pm</p>
            <p className="section6__textbox-text">Dinner : sunday : 04:00pm-08:00pm</p>
            <p className="section6__textbox-text">04:00pm-09:00pm</p>
        </div>
        <div className="section6__buttons">
            <button className="section6__buttons-btn1">Order now</button>
            <button className="section6__buttons-btn2">Reservation</button>
        </div>
    </div>
   </section>
  )
}

export default Section6