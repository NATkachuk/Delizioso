import { useState } from "react";
import "./Section5.scss";
import BetranKomar from "../../../assets/Homepage/png/BetranKomar.png";
import FerrySauwi from "../../../assets/Homepage/png/FerrySauwi.png";
import IswanDracho from "../../../assets/Homepage/png/IswanDracho.png";
import LinWei from "../../../assets/Homepage/png/LinWei.png";
import OmarHaddad from "../../../assets/Homepage/png/OmarHaddad.png";
import ChukwudiEze from "../../../assets/Homepage/png/ChukwudiEze.png";

const Section5: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="section5">
      <h2 className="section5__title">Our greatest chef</h2>
      <div className="section5-wrap">
        <div className="section5-initial">
          <div className="section5-box">
            <img src={BetranKomar} alt="Betran Komar" className="section5-box__img" />
            <p className="section5-box__text1">Betran Komar</p>
            <p className="section5-box__text2">Head chef</p>
          </div>
          <div className="section5-box">
            <img src={FerrySauwi} alt="Ferry Sauwi" className="section5-box__img" />
            <p className="section5-box__text1">Ferry Sauwi</p>
            <p className="section5-box__text2">Chef</p>
          </div>
          <div className="section5-box">
            <img src={IswanDracho} alt="Iswan Dracho" className="section5-box__img" />
            <p className="section5-box__text1">Iswan Dracho</p>
            <p className="section5-box__text2">Chef</p>
          </div>
        </div>
        {showMore && (
          <div className="section5-extra">
            <div className="section5-box">
              <img src={LinWei} alt="Lin Wei" className="section5-box__img" />
              <p className="section5-box__text1">Lin Wei</p>
              <p className="section5-box__text2">Chef</p>
            </div>
            <div className="section5-box">
              <img src={OmarHaddad} alt="Omar Haddad" className="section5-box__img" />
              <p className="section5-box__text1">Omar Haddad</p>
              <p className="section5-box__text2">Chef</p>
            </div>
            <div className="section5-box">
              <img src={ChukwudiEze} alt="Chukwudi Eze" className="section5-box__img" />
              <p className="section5-box__text1">Chukwudi Eze</p>
              <p className="section5-box__text2">Chef</p>
            </div>
          </div>
        )}
      </div>
      <button className="section5__btn button" onClick={handleToggle}>
        {showMore ? "Hide" : "View all"}
      </button>
    </section>
  );
};

export default Section5;