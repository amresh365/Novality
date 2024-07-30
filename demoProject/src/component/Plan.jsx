import React from "react";

export const Plan = () => {
  return (
    <div className="my-plan" style={{ color: "black" }}>
      <div className="plan-head">
        <span
          style={{
            color: "#7421FC",
            textAlign: "center",
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "24px",
          }}
        >
          Select a Plan
        </span>
        <span
          style={{
            color: "#19154E",
            textAlign: "center",
            fontWeight: "700",
            fontSize: "45px",
            lineHeight: "24px",
          }}
        >
          Pricing
        </span>
      </div>
      <div className="plans">
        <div className="planCard">
          <div className="starter">
            <span
              style={{
                color: "#7421FC",
                fontWeight: "600",
                fontSize: "20px",
              }}
            >
              STARTER
            </span>
            <br />
            <span style={{ fontSize: "48px", fontWeight: "700" }}>$199</span>
            <span style={{ fontSize: "30px", fontWeight: "500" }}>/mo</span>
            <div className="starter-info">
              <ul style={{ listStyle: "none" }}>
                <li>5 page website</li>
                <li>Basic SEO optimization</li>
                <li>Upto 5 Images & Videos Upload</li>
                <li>Free Hosting</li>
                <li>Payment Gateway Integration</li>
                <li>Basic Technical Support For Website (RT 72hr)</li>
              </ul>
            </div>
          </div>
          <button
            style={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid #000000 7.84%",
              boxShadow: "10px 5px 40px 0px rgba(0, 0, 0, 0.25)",
              height: "46px",
              width: "246px",
            }}
          >
            Book a Call
          </button>
        </div>
        <div
          className="planCard"
          style={{
            background: "linear-gradient(to top right, #904BFF, #6302FF)",
            color: "#FFFFFF",
          }}
        >
          <div className="starter">
            <span
              style={{
                color: "#ffff",
                fontWeight: "500",
                fontSize: "20px",
              }}
            >
              GROWTH+
            </span>
            <br />
            <span style={{ fontSize: "48px", fontWeight: "700" }}>$499</span>
            <span style={{ fontSize: "30px", fontWeight: "500" }}>/mo</span>
            <div className="starter-info" style={{ color: "#ffff" }}>
              <ul style={{ listStyle: "none" }}>
                <li>10 page website</li>
                <li>Enhanced UI/UX design</li>
                <li>CMS Setup</li>
                <li>Advanced SEO optimization</li>
                <li>100GB Images & Videos Upload</li>
                <li>Hosting via AWS/GCP</li>
                <li>Payment Gateway Integration</li>
                <li>Advance Technical Support For Website (RT 24hr)</li>
              </ul>
            </div>
          </div>
          <button
            style={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid #000000 7.84%",
              boxShadow: "10px 5px 40px 0px rgba(0, 0, 0, 0.25)",
              height: "46px",
              width: "246px",
            }}
          >
            Book a Call
          </button>
        </div>
        <div
          className="planCard"
          style={{
            background: "linear-gradient(to top right, #4B4B4B,#020202)",
            color: "#ffff",
          }}
        >
          <div className="starter">
            <span
              style={{
                color: "#ffff",
                fontWeight: "500",
                fontSize: "20px",
              }}
            >
              ENTERPRICE++
            </span>
            <br />
            <span style={{ fontSize: "48px", fontWeight: "700" }}>$1999</span>
            <span style={{ fontSize: "30px", fontWeight: "500" }}>/mo</span>
            <div className="starter-info" style={{ color: "#ffff" }}>
              <ul style={{ listStyle: "none" }}>
                <li>Custom pages</li>
                <li>E-commerce integration</li>
                <li>CMS Setup and Ongoing Support</li>
                <li>Advanced SEO strategy and implementation</li>
                <li>1TB Images & Videos Upload</li>
                <li>Private Cloud Hosting / On premise Hosting</li>
                <li>Payment Gateway Integration</li>
                <li>Enterprise Technical Support For Website (RT 12hr)</li>
              </ul>
            </div>
          </div>
          <button
            style={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid #000000 7.84%",
              boxShadow: "10px 5px 40px 0px rgba(0, 0, 0, 0.25)",
              height: "46px",
              width: "246px",
            }}
          >
            Book a Call
          </button>
        </div>
      </div>
    </div>
  );
};
