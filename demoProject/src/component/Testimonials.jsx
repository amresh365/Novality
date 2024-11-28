import React from "react";

export const Testimonials = () => {
  return (
    <div className="testiomonials">
      <div className="clientSay">
        <p
          style={{
            color: "#7421FC",
            fontSize: "20px",
            fontWeight: "600",
            fontFamily: "manrope",
          }}
        >
          Testomonials
        </p>
        <p style={{ color: "#19154E", fontSize: "40px", fontWeight: "600" }}>
          What Our Clients Say
        </p>
        <p style={{ color: "#19154E", fontSize: "18px", fontWeight: "500" }}>
          Don’t believe us? Look what our clients have to say.
        </p>
        <button
          style={{
            backgroundColor: "#7421FC",
            width: "130px",
            height: "45px",
            textAlign: "center",
          }}
        >
          Read More
        </button>
      </div>

      <div className="review">
        <div
          style={{
            width: "533px",
            height: "270px",
            position: "absolute",
            top: "10px",
            left: "23px",
            borderRadius: "20px",
            border: "1px ",
            padding: "20px",
            border: "1px solid #000000 7.84%",
            boxShadow: "10px 10px 20px 0px rgba(0, 0, 0, 0.25)",
            backgroundColor: "#ffff",
            padding: "40px",
          }}
        >
          <p style={{ marginBottom: "10px" }}>⭐⭐⭐⭐⭐</p>
          <p style={{ fontSize: "18px", fontWeight: "500" }}>
            "Working with this agency was a game-changer for our business. Their
            web design team created a stunning website that perfectly represents
            our brand. The process was smooth, and they were always responsive
            to our needs. Highly recommend!"
          </p>
          <div
            className="marketer-info"
            style={{ width: "485px", height: "50px", gap: "18px" }}
          >
            <div
              className="photo"
              style={{ height: "50px", width: "50px", color: "#ffff" }}
            >
              <img
                src="/assets/im.jpeg"
                alt=""
                style={{
                  width: "286.33",
                  height: "44px",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div style={{ width: "286.33", height: "44px" }}>
              <span
                style={{
                  color: "#19154E",
                  fontWeight: "700",
                  fontSize: "16px",
                }}
              >
                Lisa M.
              </span>
              <p
                style={{
                  color: "#5B5E76",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                Marketing Director
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "533px",
            height: "270px",
            position: "absolute",
            top: "10px",
            left: "640px",
            borderRadius: "20px",
            border: "1px ",
            border: "1px solid #000000 7.84%",
            boxShadow: "10px 10px 20px 0px rgba(0, 0, 0, 0.25)",
            backgroundColor: "#ffff",
            padding: "40px",
            background: "linear-gradient(to right, #ffff)",
            marginLeft: "10px",
          }}
        >
          <p style={{ marginBottom: "10px" }}>⭐⭐⭐⭐⭐</p>
          <p style={{ fontSize: "18px", fontWeight: "500" }}>
            "Working with this agency was a game-changer for our business. Their
            web design team created a stunning website that perfectly represents
            our brand. The process was smooth, and they were always responsive
            to our needs. Highly recommend!"
          </p>
          <div
            className="marketer-info"
            style={{ width: "485px", height: "50px", gap: "18px" }}
          >
            <div
              className="photo"
              style={{ height: "50px", width: "50px", color: "#ffff" }}
            >
              <img
                src="/assets/im.jpeg"
                alt=""
                style={{
                  width: "286.33",
                  height: "44px",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div style={{ width: "286.33", height: "44px" }}>
              <span
                style={{
                  color: "#19154E",
                  fontWeight: "700",
                  fontSize: "16px",
                }}
              >
                Lisa M.
              </span>
              <p
                style={{
                  color: "#5B5E76",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                Marketing Director
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
