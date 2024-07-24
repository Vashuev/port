import React from "react";
import logo from "../../images/footerLogo.png";
import { Link, NavLink } from "react-router-dom";
import "./footer.scss";
const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer_top">
        <div className="footer_top_left">
          <img src={logo} alt="" />
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
        <p>© 2024 Scared2compile All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
