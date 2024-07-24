import React from "react";
import linkedin from "../../../images/linkedin.svg";
import gaurav from "../../../images/gaurav.jpeg";
import Kato from "../../../images/Kato.jpeg";
import Leon from "../../../images/Leon.jpeg";
import mahesh from "../../../images/mahesh.jpg";
import shantanu from "../../../images/shantanu.jpeg";
import vaidehee from "../../../images/vaidehee.jpg";
import "./test.scss";
const Test = () => {
  const arr = [
    {
      img: gaurav,
      text: "They are perfect, I asked for a few things but they worked passionately. So basically I asked for a few things but they designed the things in the way that I never imagined, definitely going to hire them 100 times. They are not just perfect, but actually beyond it. Thank you.",
      name: "Gaurav Pundir",
      prof: "Investor, Affiliate Marketer, SEO Expert, Content Creator & Solopreneur",
      city: "Dehradun, India",
      link: "https://www.linkedin.com/in/itsgogu",
    },
    {
      img: Kato,
      text: "They are  very smart and talented individuals, I'm very grateful for what value they have been able to bring to my company. They are dedicated and persistent as they come and will no doubt become valuable. I will continue to work with them and it is a no-brainer recommendation.",
      prof: "Digital Imaging Technician",
      name: "Kato Murphy",
      city: "Essex, United Kingdom",
      link: "https://www.linkedin.com/in/chinesekato/",
    },
    {
      img: Leon,
      text: "They were able to start and finish this project within 24 hours of its posting. Thanks for the good work.",
      prof: "Business and Technology Leader at Scale Up Right",
      name: "Jerusalem, Israel",
      city: "Essex, United Kingdom",
      link: "https://www.linkedin.com/in/curchack/",
    },
    {
      img: mahesh,
      text: "",
      prof: "CEO @Maharaja Molden Plast",
      name: "Mahesh Aggarwal",
      city: "Noida, India",
      link: "https://www.linkedin.com/company/maharaja-molded-furniture/",
    },
    {
      img: shantanu,
      text: "",
      prof: "CEO @GrowingSeedTechnology",
      name: "Shantanu Singh",
      city: "Noida, India",
      link: "https://www.linkedin.com/in/kunwarshantanu/",
    },
    {
      img: vaidehee,
      text: "They were very accommodating and a great resource to work with",
      prof: "Product Marketing @ Razorpay, Ex-Zoho",
      name: "Vaidehee Joshi",
      city: "Bengaluru, India",
      link: "https://www.linkedin.com/in/vaideheejoshi/",
    },
  ];
  return (
    <div className="test_container">
      <div className="test_text" data-aos="fade-up">
        <h2>Happy Clients Speak Up</h2>
        <h3>Happy Clients Share Their Success Stories</h3>
      </div>
      <div className="test_divs">
        {arr.map((item, index) => {
          return (
            <div data-aos="fade-up" className="test_div" key={index}>
              <div className="test_div_head">
                <div className="test_images">
                  <img src={item.img} alt="" />
                  {/* <a href={item.link} target="_blank">
                    <img src={linkedin} alt="" className="linkedin_logo" />
                  </a> */}
                </div>
                <div className="test_div_info">
                  <h4> {item.name}</h4>
                  <p>{item.prof}</p>
                  <p>{item.city}</p>
                  <a href={item.link} target="_blank">
                    <u>LinkedIn Profile</u>
                  </a>
                </div>
              </div>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Test;
