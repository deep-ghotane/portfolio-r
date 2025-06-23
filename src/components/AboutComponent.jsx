import React from "react";
import myImg from "../assets/deep.png";

const AboutComponent = () => {
  return (
    <section className="about" id="about">
      <h2 className="title">
        <span>About Me</span>
      </h2>
      <div className="container flex about-content">
        <div className="flex-center myImg">
          <img src={myImg} alt="" width="100%" />
        </div>
        <div className="my-bio container">
          <h2>Deep Ghotane</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            corrupti consequuntur consectetur laborum rerum explicabo
            exercitationem accusamus molestias est iusto.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            maiores sunt totam maxime rem odit.
          </p>
          <p>Sydney, Australia</p>
          <div className="tag">Interest</div>
          <div className="flex">
            <span>Photography</span>
            <span>Graphic Design</span>
            <span>Movies</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
