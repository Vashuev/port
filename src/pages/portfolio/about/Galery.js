import React, { useEffect } from "react";
import g1 from "../../../images/Gallery/g1.png";
import g2 from "../../../images/Gallery/g2.png";
import g3 from "../../../images/Gallery/g3.png";
import g4 from "../../../images/Gallery/g4.png";
import g5 from "../../../images/Gallery/g5.png";
import g6 from "../../../images/Gallery/g6.png";
import "./galery.scss";
const Galery = () => {
  const arr = [
    { img: g4, link: "https://maharajamoldedfurniture.com/" },
    { img: g3, link: "https://growingseedtech.com/" },
    { img: g5, link: "https://muchsite.github.io/tradeclone/" },
    { img: g2, link: "https://www.ssgta.com/" },
    { img: g1, link: "" },
    { img: g6, link: "" },
  ];
  useEffect(() => {
    const scroll = () => {
      window.scrollTo(0, 0);
    };
    scroll();
  }, []);
  return (
    <div className="about_container">
      <div className="about_show">
        <div className="about_show_title">
          <h2>Visual Showcase</h2>
          <p>
            Creative solutions with custom design, responsive development, SEO
            optimization, and post-launch support
          </p>
        </div>
        <div className="about_divs">
          {arr.map((item, index) => {
            return (
              <div className="about_div" key={index}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={item.img} alt="" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Galery;
