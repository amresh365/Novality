import React from "react";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <section className="footer-novality">
          <div className="footer-companyLogo">
            <div className="logo" style={{ fontWeight: "400" }}>
              <div className="rotate" style={{ color: "white" }}>
                U
              </div>
              <div className="noRotate" style={{ color: "white" }}>
                U
              </div>
            </div>
            <p
              className="novality"
              style={{ fontFamily: "Manrope", fontSize: "24px" }}
            >
              Novality
            </p>
          </div>
          <p style={{ fontSize: "19px", fontWeight: "400", gap: "10px" }}>
            We're a software product team that gets results. We focus on
            delivering products that drive business value, on time and on
            budget.
          </p>
          <section style={{ width: "121px", height: "52px" }}>
            <p
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                fontSize: "17px",
              }}
            >
              Novality.services
            </p>
            <a href="">
              <i class="fa-brands fa-x-twitter" style={{ color: "white" }}></i>
            </a>
            <a href="/">
              <i
                class="fa-brands fa-linkedin-in"
                style={{ color: "white", marginLeft: "15px" }}
              ></i>
            </a>
            <a href="/">
              <i
                class="fa-brands fa-instagram"
                style={{ color: "white", marginLeft: "15px" }}
              ></i>
            </a>
          </section>
        </section>
        <section className="quick-links" style={{ width: "210px" }}>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "500",
              marginBottom: "6px",
            }}
          >
            Quick Links
          </p>
          <div
            className="links"
            style={{
              fontSize: "17px",
              fontWeight: "400",
              gap: "3px",
              display: "flex",
              flexDirection: "column",
              color: "white",
            }}
          >
            <a href="" style={{ color: "white" }} className="home-link">
              Home
            </a>
            <a href="" style={{ color: "white" }} className="services-link">
              Services
            </a>
            <a href className="projects-link" style={{ color: "white" }}>
              Projects
            </a>
            <a href className="case-study-link" style={{ color: "white" }}>
              Case Studies
            </a>
            <a href="" className="about-link" style={{ color: "white" }}>
              About Us
            </a>
            <a href="" className="reviews-link" style={{ color: "white" }}>
              Reviews
            </a>
            <a href=" " className="blogs-link" style={{ color: "white" }}>
              Blogs
            </a>
            <a
              href=""
              className="term-condition-link"
              style={{ color: "white" }}
            >
              Terms & Conditions
            </a>
            <a href="" className="privacy-policy" style={{ color: "white" }}>
              Privacy Policy
            </a>
          </div>
        </section>
        <section className="sevices">
          {" "}
          <p
            style={{ fontSize: "21px", fontWeight: "500", marginBottom: "6px" }}
          >
            Services
          </p>
          <div
            style={{
              fontSize: "17px",
              fontWeight: "400",
              gap: "10px",
              color: "#FFFFFF",
            }}
          >
            <p>Web Development</p>
            <p>UI/UX Design</p>
            <p>SEO Optimization</p>
            <p>CMS Service</p>
            <p>Wordpress Service</p>
            <p>Consultancy</p>
          </div>
        </section>
        <section className="contact-info">
          <p
            style={{ fontSize: "20px", fontWeight: "500", marginBottom: "6px" }}
          >
            Contact Info
          </p>
          <div style={{ width: "272px", height: "71px", gap: "10px" }}>
            <div className="location" style={{ marginBottom: "7px" }}>
              <i
                class="fa-solid fa-location-dot"
                style={{ marginRight: "8px" }}
              ></i>
              Royal city, Shiv Puri road, Jhansi, UP
            </div>
            <div className="email" style={{ marginBottom: "7px" }}>
              <i
                class="fa-solid fa-envelope"
                style={{ marginRight: "8px" }}
              ></i>
              Novalityservices@gmail.com
            </div>

            <div className="phone-number">
              <i
                class="fa-solid fa-phone"
                style={{ marginRight: "8px", color: "white" }}
              ></i>
              +91 8400120429
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
