import React from "react";
import "./homepage.style.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="dir-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Hats</h1>
            <span className="subtitle"> Shop Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">jackets</h1>
            <span className="subtitle"> Shop Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Women</h1>
            <span className="subtitle"> Shop Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Sneakers</h1>
            <span className="subtitle"> Shop Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Mens</h1>
            <span className="subtitle"> Shop Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
