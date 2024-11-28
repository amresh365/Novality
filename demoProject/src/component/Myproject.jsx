import React from "react";

export const Myproject = () => {
  return (
    <div className="projects">
      <div className="headings">
        <p
          style={{
            width: "137px",
            height: "25px",
            textAlign: "center",
            fontWeight: "8000",
            fontSize: "18px",
            lineHeight: "1.5",
            color: "#7421FC",
          }}
        >
          OUR PROJECTS
        </p>
        <p
          style={{
            fontFamily: "monospace",
            fontWeight: "600",
            fontSize: "40px",
            textAlign: "center",
            lineHeight: "48px",
            margin: "0px",
          }}
        >
          See Our Work in Action
        </p>
      </div>

      <div className="project">
        <div
          style={{
            height: "343px",
            width: "475px",
            borderRadius: "20px",
            background: `linear-gradient(to bottom right, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.5)), url("public/assets/1img.png")`,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          style={{
            height: "343px",
            width: "475px",
            borderRadius: "20px",
            backgroundImage: `url("public/assets/1img.png")`,
          }}
        ></div>
        <img
          src="/public/assets/3img.png"
          alt="project3"
          style={{
            height: "343px",
            width: "475px",
            borderRadius: "20px",
            background: `linear-gradient(to bottom right, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.5)), url("src/assets/3img.png")`,
            backgroundSize: "cover",
          }}
        />
      </div>
    </div>
  );
};
