import "./Section1.scss"

function Section1() {
  return (
    <section className="section1-ContactUs">
        <div className="section1-textbox">
            <h1 className="section1-textbox__title">Contact Us</h1>
            <p className="section1-textbox__text">We love hearing from our customers. Feel free to share your experience or ask any questions you may have.</p>
        </div>
        <form action="" className="form">
            <div className="form-wrap">
                <input placeholder="First name" className="form-input" />
                <input placeholder="Last name" className="form-input" />
                <input placeholder="Email Address" className="form-input" />
                <input placeholder="Subject" className="form-input" />
            </div>
            <textarea name="Message" className="form-textarea" placeholder="Message" rows = {20} cols = {40} ></textarea>
        </form>
        <button className="section1-btn">Submit</button>
    </section>
  )
}

export default Section1