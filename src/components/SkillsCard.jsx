import React from "react";

const SkillsCard = ({ skillTitle, skillClass, skillColor }) => {
  //   let skillTitle = "HTML";
  //   let skillClass = "fa-brands fa-html5";
  //   let skillColor = "#e34c26";
  return (
    <div style={{ width: "5rem" }}>
      <i className={skillClass} style={{ color: skillColor }}></i>
      <div>
        <h5>{skillTitle}</h5>
      </div>
    </div>
  );
};

export default SkillsCard;
