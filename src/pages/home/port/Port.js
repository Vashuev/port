import React, { useEffect } from "react";
import "./port.scss";
import f from "../../../images/G.72e08d2321ed15dd41385985dbb8f145.svg";
import s from "../../../images/Picsart.svg";
import t from "../../../images/South-Side-Logo-01.png";
import fo from "../../../images/Maharaja-Logo-(2)(1).png";

import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const Port = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="port_containr">
      <div className="port_l" data-aos="fade-up">
        <h2>
          Trusted by Businesses Across Various Industries Who Value Professional
          Websites
        </h2>
        <p>
          Join the ranks of our satisfied clients who have transformed their
          online presence with our services. Our portfolio speaks volumes about
          our commitment to excellence.
        </p>
        <Link to="/portfolio">
          <button>Explore Out Portfolio</button>
        </Link>
      </div>
      <div className="port_r" data-aos="fade-up">
        <div className="port_r_div">
          <img src={f} alt="" />
        </div>
        <div className="port_r_div">
          <img src={s} alt="" />
        </div>
        <div className="port_r_div">
          <img src={t} alt="" />
        </div>
        <div className="port_r_div">
          <img src={fo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Port;
