import React from "react";
import "../Styles/contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Get in touch</h2>
      <span className="section_subtitle">Contact me</span>

      <div className="contact_container container grid">
        <div className="contact_content">
          {/* <h3 className="contact_title">Talk to me.</h3> */}

          <div className="contact_info">
            <div className="contact_card">
              <i className="bx bx-envelope contact_card_icon"></i>

              <h3 className="contact_card_title">Email</h3>
              <span className="contact_card_data">Shihabrahman@outlook.in</span>
              <a
                href="mailto:shihabrahman@outlook.in"
                className="contact_button"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact_button_icon"></i>
              </a>
            </div>
          </div>

          <div className="contact_info">
            <div className="contact_card">
              <i className="bx bxl-whatsapp contact_card_icon"></i>

              <h3 className="contact_card_title">Whatsapp</h3>
              <span className="contact_card_data">+91 7907 689 743</span>
              <a
                href="https:api.whatsapp.com/send?phone=7907689746&text=Hello."
                className="contact_button"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact_button_icon"></i>
              </a>
            </div>
          </div>

          <div className="contact_info">
            <div className="contact_card">
              <i className="bx bxl-telegram contact_card_icon"></i>

              <h3 className="contact_card_title">Telegram</h3>
              <span className="contact_card_data">t.me/cheenjathakkali</span>
              <a
                href="https://t.me/cheenjathakkali?start=Hi"
                className="contact_button"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact_button_icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact_content">
          <h3 className="contact_title">Write me your message</h3>
          <form className="contact_form">
            <div className="contact_form_div">
              <label className="contact_form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact_form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact_form_div">
              <label className="contact_form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact_form-input"
                placeholder="Insert your mail"
              />
            </div>

            <div className="contact_form_div contact_form-area">
              <label className="contact_form-tag">Message</label>
              <textarea
                name="message"
                cols="30"
                rows="9"
                className="contact_form-input "
                placeholder="Write your message"
              ></textarea>
            </div>

            <div className="">
              <button className="button button_flex contact_form-button">
                Send Message
                <i className="uil uil-location-arrow home_send"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
