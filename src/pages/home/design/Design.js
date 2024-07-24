import React from "react";
import "./design.scss";
import f from "../../../images/pre1.svg";
import s from "../../../images/pre2.svg";
import t from "../../../images/pre3.svg";
import fo from "../../../images/paper-plane-tilt-bold.svg";
import des from "../../../images/des.png";
const Design = () => {
  const arr = [
    {
      img: f,
      text: "Stand out with unique, professional designs for your brand's identity.",
    },
    {
      img: s,
      text: "Capture and retain customer attention with visually appealing websites.",
    },
    {
      img: t,
      text: "Reflect your brand's values through innovative design solutions.",
    },
    {
      img: fo,
      text: "Reflect your brand's values through innovative design solutions.",
    },
  ];
  return (
    <div className="design_container">
      <div className="design_left" data-aos="fade-up">
        <h3>Custom Design</h3>
        <h2>Tailored Custom Design Services</h2>
        <p>
          Our custom design services create visually appealing websites that
          reflect your brand’s identity and values. Stand out with unique,
          professional designs crafted to capture and retain customer attention.
        </p>
        <div className="design_divs">
          {arr.map((item, index) => {
            return (
              <div className="design_div" key={index}>
                <img src={item.img} alt="" />
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="design_right" data-aos="fade-up">
        <img src={des} alt="" />
      </div>
    </div>
  );
};

export default Design;
