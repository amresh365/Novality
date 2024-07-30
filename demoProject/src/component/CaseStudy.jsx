import React from "react";

export const CaseStudy = () => {
  return (
    <div className="case-study">
      <div className="container">
        <div
          style={{ height: "382px", width: "454px", gap: "30px" }}
          className="studydirection"
        >
          <span
            style={{
              color: "#7421FC",
              fontFamily: "Manrope",
              fontWeight: "800",
              fontSize: "18px",
              lineHeight: "24.59px",
              letterSpacing: "3%",
              textAlign: "Center",
            }}
          >
            Case Study
          </span>
          <p
            style={{
              width: "454px",
              height: "144px",
              color: "#19154E",
              fontWeight: "400px",
              fontSize: "40px",
              fontFamily: "Criteria CF Demi Bold",
            }}
          >
            Custom Software Dev for Real Estate Company
          </p>
          <p
            style={{
              Width: "454px",
              Height: "93px",
              color: "#5B5E76",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "31px",
            }}
          >
            A custom website for a real estate company. The team has worked on
            backend coding and customized the site to attract more leads.
          </p>
          <button style={{ backgroundColor: "#7421FC" }}>
            View Case Study
          </button>
        </div>
        <div
          style={{
            height: "382px",
            width: "454px",
            gap: "30px",
            backgroundImage: `url("src/assets/caseStudy.png")`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </div>
  );
};
