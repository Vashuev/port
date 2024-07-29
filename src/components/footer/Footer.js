import React from "react";
import logo from "../../images/logos/logo1.svg";
import logo1 from "../../images/logos/logo11.svg";
import insta from "../../images/insta.svg";
import { Link, NavLink } from "react-router-dom";
import "./footer.scss";
const Footer = ({ theme }) => {
  return (
    <footer className="footer_container">
      <div className="footer_top">
        <div className="footer_top_left">
          <img
            src={theme !== "dark" ? logo : logo1}
            alt=""
            className="footer_logo"
          />
          {/* <img src={insta} alt="" className="insta_logo" /> */}
        </div>
        <div className="footer_top_right">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/terms"
          >
            Terms And Conditions
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/privacy"
          >
            Privacy Policy
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/refund"
          >
            Refund Policy
          </NavLink>
        </div>
      </div>
      <div className="footer_bottom">
        <p>© 2024 WebStimulate All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
