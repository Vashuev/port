import React from "react";
import "./res.scss";
import f from "../../../images/pre1.svg";
import s from "../../../images/pre2.svg";
import t from "../../../images/pre3.svg";
import fo from "../../../images/paper-plane-tilt-bold.svg";
import res from "../../../images/res.png";
import ch1 from "../../../images/choose1.png";
import ch2 from "../../../images/choose2.png";
import ch3 from "../../../images/choose3.png";
import ch4 from "../../../images/choose4.png";
const Responsive = () => {
  const arr = [
    {
      img: f,
      text: "Adapt to audience preferences with responsive design for accessibility.",
    },
    {
      img: s,
      text: "Engage customers with a consistent online presence across various platforms.",
    },
    {
      img: t,
      text: "Adapt to user preferences with a responsive design for seamless interaction.",
    },
    {
      img: fo,
      text: "Adapt to user preferences with a responsive design for seamless interaction.",
    },
  ];
  return (
    <>
      <div className="res_container">
        <div className="res_left" data-aos="fade-up">
          <img src={res} alt="" />
        </div>
        <div className="res_right" data-aos="fade-up">
          <h3>Functionality</h3>
          <h2>Responsive Development</h2>
          <p>
            Our responsive development services guarantee flawless functionality
            on any device, providing a seamless and consistent user experience.
            Engage your audience with a design that adapts to preferences and
            ensures accessibility.
          </p>
          <div className="res_divs">
            {arr.map((item, index) => {
              return (
                <div className="res_div" key={index}>
                  <img src={item.img} alt="" />
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="choose_conatiner">
        <h2 data-aos="fade-up">Why choose us?</h2>
        <p data-aos="fade-up">We are the best in the business</p>
        <div className="choose_divs">
          <div className="choose_divs_f" data-aos="fade-up">
            <div className="choose_div choose_div_1">
              <img src={ch1} alt="" />
              <div>
                <h3>Custom Design</h3>
                <p>Tailored websites that reflect your brand.</p>
              </div>
            </div>
            <div className="choose_div choose_div_2">
              <img src={ch2} alt="" />
              <div>
                <h3>Responsive Development</h3>
                <p>Mobile-friendly design for all devices.</p>
              </div>
            </div>
          </div>
          <div className="choose_divs_s" data-aos="fade-up">
            <div className="choose_div choose_div_3">
              <img src={ch3} alt="" />
              <div>
                <h3>SEO Optimization</h3>
                <p>Improved search engine visibility.</p>
              </div>
            </div>
            <div className="choose_div choose_div_4">
              <img src={ch4} alt="" />
              <div>
                <h3>Content Creation</h3>
                <p>Professional writing and media services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Responsive;
