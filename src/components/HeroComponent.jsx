import React from "react";
import ProfileImg from "../assets/deep.png";

const HeroComponent = () => {
  return (
    <section className="hero-section container" id="hero">
      <div className="grid hero">
        <div className="left flex">
          <div>
            Hi, I'm <span>Deep Ghotane</span>
          </div>
          <div className="tag">Front-End Developer</div>
          <p>I specialize in Front End Development</p>
          <div>
            <a href="./assets/deep.png" download>
              <button>
                Download CV<i className="fa-solid fa-circle-down"></i>
              </button>
            </a>
          </div>
        </div>
        <div className="right flex img">
          <img src={ProfileImg} alt="my image" />
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
