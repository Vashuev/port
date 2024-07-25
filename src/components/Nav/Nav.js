import React, { useEffect, useState } from "react";
import "./nav.scss";
import { Link, NavLink } from "react-router-dom";
import sun from "../../images/sun.svg";
import moon from "../../images/moon.svg";
import logo from "../../images/footerLogo.png";
const Nav = ({ theme, handleTogle }) => {
  const [ham, setHam] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`nav_links_mob_container ${ham && "opened_ham"}`}>
        <div className="nav_links_mob">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/"
            onClick={() => setHam(false)}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/portfolio"
            onClick={() => setHam(false)}
          >
            Portfolio
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/faq"
            onClick={() => setHam(false)}
          >
            F.A,Q
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/contact"
            onClick={() => setHam(false)}
          >
            Contact
          </NavLink>
        </div>
      </div>
      <nav
        className={`nav_container ${
          scrollPosition > 200 && "nav_container_active"
        }`}
      >
        <Link to="/">
          <img src={logo} alt="" className="nav_logo" />
        </Link>
        <div className="nav_links_desk">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/portfolio"
          >
            Portfolio
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/faq"
          >
            FAQ's
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </div>

        <div className="ham_mob_btns">
          <div className="theme_btn" onClick={handleTogle}>
            <img src={sun} alt="" className={`${theme == "dark" && "w_0"}`} />
            <img src={moon} alt="" className={`${theme !== "dark" && "w_0"}`} />
          </div>
          <div className="three col" onClick={() => setHam(!ham)}>
            <div
              className={`hamburger  ${ham && "is-active"}`}
              id="hamburger-1"
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
