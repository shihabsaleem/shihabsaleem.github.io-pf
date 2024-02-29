import React from "react";

const Data = () => {
  return (
    <div className="home_data">
      <h1 className="home_title">
        Shihab Rahman<span className="home_title_span">.</span>
      </h1>
      <h3 className="home_subtitle">Developer</h3>
      <p className="home_desc">
        Crafting elegant, user-centric digital solutions through web development
        and design.
      </p>
      <a
        href="#contact"
        target="_blank"
        rel="noreferrer"
        className="button button_flex"
      >
        Say Hello
        <i className="uil uil-location-arrow home_send"></i>
      </a>
    </div>
  );
};

export default Data;
