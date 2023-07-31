import React from "react";
import "../Styles/home.css";

const ScrollDown = () => {
  return (
    <div className="home_scroll">
      <a href="#about" className="home_scroll-button button_flex">
        <i class="uil uil-mouse-alt scroll-mouse"></i>
        <span className="home_scroll-name">Scroll Down</span>{" "}
        <i class="uil uil-arrow-down home_scroll-arrow"></i>
      </a>
    </div>
  );
};

export default ScrollDown;
