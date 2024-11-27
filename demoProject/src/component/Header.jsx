import React from "react";

export const Header = () => {
  return (
    <div className="header">
      <div className="head">
        {/* Logo */}
        <div className="companyLogo">
          <div className="logo">
            <div className="rotate">U</div>
            <div className="noRotate">U</div>
          </div>
          <p className="novality">Novality</p>
        </div>

        {/*Navs linkss*/}
        <div className="navs">
          <a href="" className="nav">
            Services
          </a>
          <a href="" className="nav">
            Projects
          </a>
          <a href="" className="nav">
            Case Studys
          </a>
          <a href="" className="nav">
            About us
          </a>
          <a href="" className="nav">
            Pricing
          </a>
          <a href="" className="nav">
            Blogs
          </a>
          <button style={{ backgroundColor: "#451297", marginTop: "3px" }}>
            Book a Call
          </button>
        </div>
      </div>
    </div>
  );
};
