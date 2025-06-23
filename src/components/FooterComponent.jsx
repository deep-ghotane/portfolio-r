import React from "react";

const FooterComponent = () => {
  return (
    <footer className="flex-center">
      <div className="top flex">
        <div className="links">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="socials">
          <h3>Socials</h3>
          <ul>
            <li>
              <a href="">LinkedIn</a>
            </li>
            <li>
              <a href=""></a>Youtube
            </li>
            <li>
              <a href=""></a>GitHub
            </li>
            <li>
              <a href=""></a>Facebook
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom">&copy; Copy right reserved. 2025</div>
    </footer>
  );
};

export default FooterComponent;
