import React from "react";

export const Blogs = () => {
  return (
    <div className="my-blogs">
      <div className="blogs-head">
        <span style={{ color: "#7421FC", fontWeight: "600" }}>BLOGS</span>
        <h2 style={{ color: "#19154E" }}>
          Insights and news from Novality team..
        </h2>
        <p
          style={{ color: "#5B5E76", fontFamily: "manrope", fontWeight: "500" }}
        >
          Discover articles and guides from Ultra team and improve functionality
          of your websites
        </p>
        <button style={{ backgroundColor: "#7421FC" }}>See all Articles</button>
      </div>
      <div className="blogs">
        <div className="blog">
          <div>
            <img
              src="src/assets/blog1.jpeg"
              alt="blog"
              style={{
                height: "400px",
                width: "559.5px",
                borderRadius: "20px 20px 0px 0px",
              }}
            />
            <div className="blog-info-container">
              <div className="blog-info">
                <span style={{ color: "#7421FC" }}>INSPIRATION</span>
                <h4 style={{ color: "#19154E" }}>
                  10 ways to Improve Your Campaign
                </h4>
                <p style={{ color: "#5B5E76" }}>Sep 6, 2024</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="src/assets/blog1.jpeg"
              alt="blog"
              style={{
                height: "400px",
                width: "559.5px",
                borderRadius: "20px 20px 0px 0px",
              }}
            />
            <div className="blog-info-container">
              <div className="blog-info">
                <span style={{ color: "#4ECCCF" }}>RESOURCES</span>
                <h4 style={{ color: "#19154E" }}>Improving Your Site’s SEO</h4>
                <p style={{ color: "#5B5E76" }}>Sep 6, 2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="blog">
          <div>
            <img
              src="src/assets/blog3.jpeg"
              alt="blog"
              style={{
                height: "400px",
                width: "559.5px",
                borderRadius: "20px 20px 0px 0px",
              }}
            />
            <div className="blog-info-container">
              <div className="blog-info">
                <span style={{ color: "#3DA1FF" }}>GUIDE</span>
                <h4 style={{ color: "#19154E" }}>
                  How to Improve Web Design Process
                </h4>
                <p style={{ color: "#5B5E76" }}>Sep 6, 2024</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="src/assets/blog3.jpeg"
              alt="blog"
              style={{
                height: "400px",
                width: "559.5px",
                borderRadius: "20px 20px 0px 0px",
              }}
            />
            <div className="blog-info-container">
              <div className="blog-info">
                <span style={{ color: "#F56687" }}>RESOURCES</span>
                <h4 style={{ color: "#19154E" }}>
                  10 ways to Improve Your Campaign
                </h4>
                <p style={{ color: "#5B5E76" }}>Sep 6, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
