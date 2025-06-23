import React from "react";
import ProjectImg from "../assets/project.png";

const ProjectsComponent = () => {
  return (
    <section className="projects container" id="projects">
      <h2 className="title">
        <span>My Projects </span>
      </h2>
      {/* First Skills */}
      <div className="grid project-container">
        <div className="project-card">
          <div className="top">
            <img src={ProjectImg} alt="" width="100%" />
          </div>
          <div className="bottom container">
            <div className="links">
              <a href="https://github.com/deep-ghotane">
                <i className="fa-brands fa-square-github"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
            <h3>Personal Portfolio</h3>
            <p>Techstacks: HTML, CSS , JavaScript, React</p>
          </div>
        </div>
        {/* Second */}
        <div className="project-card">
          <div className="top">
            <img src={ProjectImg} alt="" width="100%" />
          </div>
          <div className="bottom container">
            <div className="links">
              <a href="https://github.com/deep-ghotane">
                <i className="fa-brands fa-square-github"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
            <h3>Personal Portfolio</h3>
            <p>Techstacks: HTML, CSS , JavaScript, React</p>
          </div>
        </div>

        {/* Third */}
        <div className="project-card">
          <div className="top">
            <img src={ProjectImg} alt="" width="100%" />
          </div>
          <div className="bottom container">
            <div className="links">
              <a href="https://github.com/deep-ghotane">
                <i className="fa-brands fa-square-github"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
            <h3>Personal Portfolio</h3>
            <p>Techstacks: HTML, CSS , JavaScript, React</p>
          </div>
        </div>

        {/* Fourth */}
        <div className="project-card">
          <div className="top">
            <img src={ProjectImg} alt="" width="100%" />
          </div>
          <div className="bottom container">
            <div className="links">
              <a href="https://github.com/deep-ghotane">
                <i className="fa-brands fa-square-github"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
            <h3>Personal Portfolio</h3>
            <p>Techstacks: HTML, CSS , JavaScript, React</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsComponent;
