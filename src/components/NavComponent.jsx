import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="header container flex">
        <div className="logo flex">
          <div>Deep</div>
          <div className="line">Front-End Developer</div>
        </div>

        {/* hamburger menu */}
        <label htmlFor="hamburgerMenu">
          <i className="fa-solid fa-bars"></i>
        </label>

        <input type="checkbox" id="hamburgerMenu" />

        <div className="menu">
          <ul className="flex navigation">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/skills"}>Skills</Link>
            </li>
            <li>
              <Link to={"/projects"}>Projects</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
