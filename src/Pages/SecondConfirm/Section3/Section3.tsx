
import "./Section3.scss"

function Section3() {
  return (
    <section className="section3-SecondConfirm">
        <form  className="form">
            <textarea className="form-area" name="request" rows={20} cols={40} placeholder="Add a special request"></textarea>
        </form>
        <div className="section3-textbox">
            <h2 className="section3-textbox__title">Restaurant informations</h2>
            <div className="section3-textbox__cont">
                <p className="section3-textbox__cont-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <p className="section3-textbox__cont-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.</p>
            </div>
        </div>
    </section>
  )
}

export default Section3