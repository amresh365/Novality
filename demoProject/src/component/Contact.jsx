import React from "react";

export const Contact = () => {
  return (
    <div className="contactUs">
      <section className="contactContainer">
        <span style={{ fontWeight: "600", fontSize: "22px" }}>CONTACT US</span>
        <h3
          style={{
            color: "white",
            fontFamily:
              " Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
            fontWeight: "600",
            fontSize: "40px",
          }}
        >
          Have more questions? <br />
          Book a Free Call Now
        </h3>
        <button style={{ backgroundColor: "white", color: "black" }}>
          Schedule a call
        </button>
      </section>
    </div>
  );
};
