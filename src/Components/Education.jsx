import React from "react";
import "../Styles/education.css";

const Education = () => {
  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">Journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div className="qualification_button qualification_active button_flex">
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>

          <div className="qualification_button button_flex">
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div className="qualification_content  qualification_content-active">
            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Python Fullstack Intern</h3>
                <span className="qualification_subtitle">
                  Inmakes Infotech.
                </span>
                <div className="qualification_cal">
                  <i class="uil uil-calendar-alt"></i>Sep 2023 - Dec 2024
                </div>
              </div>
            </div>
            <div className="qualification_data">
              <div className="align-right">
                <h3 className="qualification_title">
                  B.Tech in Computer Science & Engg.
                </h3>
                <span className="qualification_subtitle">
                  College of Engineering Munnar, Idukki
                </span>
                <div className="qualification_cal">
                  <i class="uil uil-calendar-alt"></i>Nov 2020 - Aug 2023
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Web Designer</h3>
                <span className="qualification_subtitle">
                  GJ Infotech P Ltd.
                </span>
                <div className="qualification_cal">
                  <i class="uil uil-calendar-alt"></i>May 2018 - Jun 2019
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div className="align-right">
                <h3 className="qualification_title">
                  Diploma in Computer Engineering
                </h3>
                <span className="qualification_subtitle">
                  St.Marys Polytechnic College, Palakkad
                </span>
                <div className="qualification_cal">
                  <i class="uil uil-calendar-alt"></i>Jul 2015 - Apr 2018
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
