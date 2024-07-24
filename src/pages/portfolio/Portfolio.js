import React, { useEffect, useRef } from "react";
import por from "../../images/portfolioBack.jpeg";
import por2 from "../../images/hb.svg";
import ci from "../../images/contacticon.svg";
import m1 from "../../images/maharaja/desktop/m1.png";
import m2 from "../../images/maharaja/desktop/m2.png";
import m3 from "../../images/maharaja/desktop/m3.png";
import mm1 from "../../images/maharaja/mobel/m1.png";
import mm2 from "../../images/maharaja/mobel/m2.png";
import mm3 from "../../images/maharaja/mobel/m3.png";
import mm4 from "../../images/maharaja/mobel/m4.png";
import g1 from "../../images/GrowingSeed/g2.png";
import g2 from "../../images/GrowingSeed/g3.png";
import g3 from "../../images/GrowingSeed/g4.png";
import g4 from "../../images/GrowingSeed/g5.png";
import t1 from "../../images/tradeflare/t1.png";
import t2 from "../../images/tradeflare/t2.png";
import t3 from "../../images/tradeflare/t3.png";
import t4 from "../../images/tradeflare/t4.png";
import mLogo from "../../images/Maharaja-Logo-(2)(1).png";
import gLogo from "../../images/G.72e08d2321ed15dd41385985dbb8f145.svg";
import tLogo from "../../images/tLogo.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./portfolio.scss";
import { Link } from "react-router-dom";
import Galery from "./about/Galery";
const Portfolio = () => {
  useEffect(() => {
    const scroll = () => {
      window.scrollTo(0, 0);
    };
    scroll();
  }, []);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const gArr = [g1, g2, g3, g4];
  const mArr = [m1, m2, m3];
  const mmArr = [mm1, mm2, mm3, mm4];
  const tArr = [t1, t2, t3, t4];
  const myElementRef = useRef(null);

  const scrollToElement = () => {
    if (myElementRef.current) {
      myElementRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="portfolio_container">
      <div className="portfolio_hero">
        <div className="portfolio_back">
          <img src={por} alt="" className="port_back _back" />
          <img src={por2} alt="" className="port_back _top" />
        </div>
        <div className="portfolio_text">
          <h1>Featured Projects</h1>
          <p>
            See how we create user-friendly, SEO-optimized websites that drive
            business growth.
          </p>
          <button onClick={scrollToElement}>Explore More</button>
        </div>
      </div>
      <div className="port_benefits">
        <div className="port_benefits_title">
          <h3>Portfolio</h3>
        </div>
      </div>
      <div className="highlight" ref={myElementRef}>
        <div className="highlite_body">
          <div className="h_left">
            <div className="h_title">
              <h3>Feature Highlight</h3>
              <div className="port_logo">
                <h2>Maharaja</h2>
                <a
                  href="https://maharajamoldedfurniture.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={mLogo} alt="" />
                </a>
              </div>
              <p>Website for the India’s No. Chairs Company</p>
            </div>
            <div className="h_left_div">
              <h4 className="active_h">1</h4>
              <div>
                <h3>Wishlist: wishlist to save favorite elements</h3>
              </div>
            </div>
            <div className="h_left_div">
              <h4>2</h4>
              <div>
                <h3>Email Alerts: Email notification for the contact form</h3>
              </div>
            </div>
            <div className="h_left_div">
              <h4>3</h4>
              <div>
                <h3>Dynamically Changing content from the Backend</h3>
              </div>
            </div>
          </div>
          <div className="slider_container slider_container_maharaja_desktop">
            <Slider {...settings}>
              {mArr.map((item, index) => {
                return (
                  <div key={index}>
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="slider_container slider_container_maharaja_mobile">
            <Slider {...settings}>
              {mmArr.map((item, index) => {
                return (
                  <div key={index}>
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      <div className="highlight">
        <div className="highlite_body hb_reverse">
          <div className="h_left">
            <div className="h_title">
              <h3>Feature Highlight</h3>
              <div className="port_logo">
                <h2>GrowingSeed</h2>
                <a
                  href="https://growingseedtech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={gLogo} alt="" />
                </a>
              </div>
              <p>Website for an online courses & consultant company</p>
            </div>
            <div className="h_left_div">
              <h4 className="active_h">1</h4>
              <div>
                <h3>Email Alerts: Email notification for the contact form</h3>
              </div>
            </div>
            <div className="h_left_div">
              <h4>2</h4>
              <div>
                <h3>Dynamically Changing content from the Backend</h3>
              </div>
            </div>
            <div className="h_left_div">
              <h4>3</h4>
              <div>
                <h3>Modern Framework: Build with React & Django</h3>
              </div>
            </div>
          </div>
          <div className="slider_container">
            <Slider {...settings}>
              {gArr.map((item, index) => {
                return (
                  <div key={index}>
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      <div className="highlight">
        <div className="highlite_body">
          <div className="h_left">
            <div className="h_title">
              <h3>Feature Highlight</h3>
              <div className="port_logo">
                <h2>Tradeflair</h2>
                <a
                  href="https://muchsite.github.io/tradeclone/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={tLogo} alt="" />
                </a>
              </div>
              <p>Website for a fintech company</p>
            </div>
            <div className="h_left_div">
              <h4 className="active_h">1</h4>
              <div>
                <h3>Dynamically Content changing from the Backend</h3>
              </div>
            </div>
            <div className="h_left_div">
              <h4>2</h4>
              <div>
                <h3>Mobile Responsive</h3>
              </div>
            </div>
            <div className="h_left_div">
              <h4>3</h4>
              <div>
                <h3>Build with 3d objects</h3>
              </div>
            </div>
          </div>
          <div className="slider_container">
            <Slider {...settings}>
              {tArr.map((item, index) => {
                return (
                  <div key={index}>
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      <Galery />
      <div className="colab">
        <div className="colab_bottom">
          <img src={ci} alt="" />
          <h2>Contact Us for Collaborations and Inquiries</h2>
          <Link to="/contact">Contact US</Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
