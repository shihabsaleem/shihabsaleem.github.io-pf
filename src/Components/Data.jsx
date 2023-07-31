import React from "react";

const Data = () => {
  return (
    <div className="home_data">
      <h1 className="home_title">
        Shihab Rahman<span className="home_title_span">.</span>
      </h1>
      <h3 className="home_subtitle">Developer</h3>
      <p className="home_desc">
        I'm Creative Designer based in Kerala, I'm Very passionate and dedicated
        to my work.
      </p>
      <a
        href="https://wa.me/+917907689743?text=hello" target="_blank" rel="noreferrer"
        className="button button_flex"
      >
        Say Hello
        <i className="uil uil-location-arrow home_send"></i>
      </a>
    </div>
  );
};

export default Data;
