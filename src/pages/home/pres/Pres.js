import React from "react";
import f from "../../../images/pre1.svg";
import s from "../../../images/pre2.svg";
import t from "../../../images/pre3.svg";
import fo from "../../../images/pre4.svg";
import fi from "../../../images/pre5.svg";
import si from "../../../images/pre6.svg";
import "./pres.scss";
const Pres = ({ myElementRef }) => {
  const arr = [
    {
      img: f,
      title: "Custom Designs",
      sp: "Showcase your uniqueness and enhance user experience with custom designs that reflect your brand identity.",
    },
    {
      img: s,
      title: "Mobile Optimization",
      sp: "Optimize your website for mobile devices to ensure a seamless user experience across all screen sizes.",
    },
    {
      img: t,
      title: "SEO Strategies",
      sp: "Implement effective SEO strategies to improve your search engine visibility and attract more organic traffic.",
    },
    {
      img: fo,
      title: "Competitive Edge",
      sp: "Gain a competitive edge in your industry by standing out online with a professionally designed website.",
    },
    {
      img: fi,
      title: "Tailored Solutions",
      sp: "Drive growth and engagement with tailored solutions that meet the unique needs of your business.",
    },
    {
      img: si,
      title: "User Experience",
      sp: "Enhance user experience and encourage interaction with intuitive interfaces and user-friendly features.",
    },
  ];
  return (
    <div className="pre_container" ref={myElementRef}>
      <div className="pre_text" data-aos="fade-up">
        <h3>Website Development</h3>
        <h2>Elevate Online Presence</h2>
        <p>
          Elevate your online presence with our dedicated website development
          services. Gain a competitive edge with custom designs, mobile-friendly
          platforms, and SEO strategies that drive growth and engagement.
        </p>
      </div>
      <div className="pre_divs">
        {arr.map((item, index) => {
          return (
            <div className="pre_div" data-aos="fade-up" key={index}>
              <img src={item.img} alt="" />
              <div className="pre_div_text">
                <span className="pre_tiv_title">{item.title} </span>
                <span>{item.sp}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pres;
