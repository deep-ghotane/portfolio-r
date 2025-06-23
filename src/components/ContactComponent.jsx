import React from "react";

const ContactCopmonent = () => {
  return (
    <section className="contact container" id="contact">
      <h2 className="title">
        <span>Contact Me</span>
      </h2>
      <div className="flex social">
        <a href="">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-square-github"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href="">
          <i className="fa-solid fa-mobile-button"></i>
        </a>
      </div>
      <h3>Or</h3>
      <div className="flex-center">
        <a href="" className="email-section flex-center">
          <span>youremail@gmail.com</span>
          <div className="email-icon flex-center">
            <i className="fa-solid fa-paper-plane"></i>
          </div>
        </a>
      </div>
    </section>
  );
};

export default ContactCopmonent;
