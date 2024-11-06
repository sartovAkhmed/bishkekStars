import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import "../Styles/Navbar.css";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  const navBarLinks = [
    {
      to: "/",
      linkText: "Главная",
    },
    {
      to: "#services",
      linkText: "Сервисы",
    },
    {
      to: "#about",
      linkText: "О нас",
    },
    {
      to: "#reviews",
      linkText: "Слайдер",
    },
  ];

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          BishkekStars <span className="navbar-sign">🔥</span>
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        {navBarLinks.map((link, id) => (
          <li key={id}>
            <a href={link.to} className="navbar-links">
              {link.linkText}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleChatBtnClick}
      >
        <FontAwesomeIcon icon={faCommentDots} /> Обратиться к специалисту
      </button>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          {navBarLinks.map((link, id) => (
            <li key={id}>
              <a onClick={openNav} href={link.to} className="navbar-links">
                {link.linkText}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
