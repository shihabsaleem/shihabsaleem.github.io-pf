import React from "react";
import "../Styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">
          Shihab<span className="logo_span">.</span>
        </h1>

        <ul className="footer_list">
          <li>
            <a href="#home" className="footer_link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer_link">
              Portfolio
            </a>
          </li>

          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>

          <li>
            <a href="#contact" className="footer_link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://www.instagram.com/cheenjathakkali/"
            className="footer_social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.facebook.com/shihab0208"
            className="footer_social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.behance.net/shihabsaleem"
            className="footer_social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-behance"></i>
          </a>
        </div>

        <span className="footer_copy">&#169; Shihab. All right reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
