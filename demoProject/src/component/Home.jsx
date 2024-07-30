import React from "react";
import { Header } from "./Header";
export const Home = () => {
  return (
    <div className="home">
      <Header />
      <br />
      <div className="solo">
        <div style={{ width: "843px", height: "193px", gap: "15px" }}>
          <div
            style={{
              width: "843px",
              height: "142px",
              fontFamily: "manrope",
            }}
          >
            <p
              style={{
                fontWeight: "600",
                fontSize: "57px",
                textAlign: "center",
                lineHeight: "75.24px",
                margin: "0px",
              }}
            >
              Websites That <span style={{ color: "#7421FC" }}>Convert</span>
            </p>
            <p
              style={{
                fontWeight: "600",
                fontSize: "51px",
                textAlign: "center",
                lineHeight: "67.32px",
                margin: "0px",
              }}
            >
              Unleash Your Brand’s Potential.
            </p>
          </div>
          <p
            style={{
              fontWeight: "500",
              fontSize: "26px",
              textAlign: "center",
              lineHeight: "35.52px",
              height: "36px",
            }}
          >
            Grow your brand with websites that work seemlesly
          </p>
        </div>

        <button
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "20px, 30px, 20px, 30px",
            borderRadius: "10px",
            gap: "10px",
          }}
        >
          Let's Build Your Dream Website
        </button>
      </div>
    </div>
  );
};
