import React from "react";

const BannerComponent = () => {
  return (
    <section className="flex banner container">
      <div className="flex info-content">
        <div className="flex-center icon-container">
          <i className="fa-solid fa-award"></i>
        </div>
        <div>
          <span>IT</span>
          <p>Graduate</p>
        </div>
      </div>
      <div className="info-divider"></div>

      <div className="flex info-content">
        <div className="flex-center icon-container">
          <i className="fa-solid fa-award"></i>
        </div>
        <div>
          <span>3+ Projects</span>
          <p>Completed</p>
        </div>
      </div>
      <div className="info-divider"></div>
      <div className="flex info-content">
        <div className="flex-center icon-container">
          <i className="fa-solid fa-award"></i>
        </div>
        <div>
          <span>1+ Year</span>
          <p>Experience</p>
        </div>
      </div>
    </section>
  );
};

export default BannerComponent;
