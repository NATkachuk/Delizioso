import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import "./AboutUs.scss"
import Section1 from "./Section1/Section1"
import Section2 from "./Section2/Section2"

function AboutUs() {
  return (
    <>
        <Header/>
        <main className="about-us">
            <Section1/>
            <Section2/>
        </main>
        <Footer/>
    </>
  )
}

export default AboutUs