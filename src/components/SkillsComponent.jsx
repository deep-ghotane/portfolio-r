import React from "react";
import SkillsCard from "./SkillsCard";

const SkillsComponent = () => {
  let skillArray = [
    {
      skillTitle: "HTML",
      skillClass: "fa-brands fa-html5",
      skillColor: "#e34c26",
    },
    {
      skillTitle: "CSS",
      skillClass: "fa-brands fa-css3-alt",
      skillColor: "#264de4",
    },
    {
      skillTitle: "JavaScript",
      skillClass: "fa-brands fa-js",
      skillColor: "#f0db4f",
    },
    {
      skillTitle: "GitHub",
      skillClass: "fa-brands fa-square-github",
      skillColor: "",
    },
    {
      skillTitle: "Bootstrap",
      skillClass: "fa-brands fa-bootstrap",
      skillColor: "#563d7c",
    },
    {
      skillTitle: "React",
      skillClass: "fa-brands fa-react",
      skillColor: "#61dbfb",
    },
  ];
  return (
    <div className="skills" id="skills">
      <h2 className="title">
        <span>Skills</span>
      </h2>
      <div className="container flex skills-container">
        {/* <SkillsCard
          skillTitle="HTML"
          skillClass="fa-brands fa-html5"
          skillColor="#e34c26"
        />

        <SkillsCard
          skillTitle="CSS"
          skillClass="fa-brands fa-css3-alt"
          skillColor="#264de4"
        /> */}

        {skillArray.map((item) => (
          <SkillsCard
            skillTitle={item.skillTitle}
            skillClass={item.skillClass}
            skillColor={item.skillColor}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsComponent;
