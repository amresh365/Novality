import React from "react";

export const Service = () => {
  return (
    <div className="our-service">
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
          OUR SERVICES
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
          From designing to development, we’ve got you covered.
        </p>
      </div>
      <div className="services">
        <div className="web-desoghn-services">
          <div className="card">
            <svg
              width="28"
              height="16"
              viewBox="0 0 28 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7 14.1333L4.56668 8L10.7 1.86667L8.83334 0L0.833344 8L8.83334 16L10.7 14.1333ZM17.6333 14.1333L23.7667 8L17.6333 1.86667L19.5 0L27.5 8L19.5 16L17.6333 14.1333Z"
                fill="#7421FC"
              />
            </svg>

            <p
              style={{
                width: "215px",
                height: "33px",
                fontFamily: "manrope",
                fontWeight: "800px",
                fontSize: "24px",
                textAlign: "center",
                color: "#19154E",
              }}
            >
              Web Development
            </p>
            <p
              style={{
                width: "286.33px",
                height: "88px",
                fontFamily: "Manrope",
                fontWeight: "500px",
                fontSize: "16px",
                textAlign: "center",
                color: "#19154E",
              }}
            >
              Building websites that are not only visually stunning but also
              strategically optimized to achieve your business goals.
            </p>
          </div>
          <div className="card">
            <svg
              width="57"
              height="56"
              viewBox="0 0 57 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" width="56" height="56" rx="10" fill="#F6F4FF" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M27.9121 35.3972C26.4571 36.4077 24.6898 37 22.7842 37C17.8136 37 13.7842 32.9705 13.7842 28C13.7842 23.0295 17.8136 19 22.7842 19C24.6898 19 26.4571 19.5923 27.9121 20.6028C29.367 19.5923 31.1343 19 33.04 19C38.0105 19 42.04 23.0295 42.04 28C42.04 32.9705 38.0105 37 33.04 37C31.1343 37 29.367 36.4077 27.9121 35.3972ZM26.2896 33.9526C25.262 34.5591 24.0637 34.907 22.7842 34.907C18.9695 34.907 15.8772 31.8146 15.8772 28C15.8772 24.1854 18.9695 21.093 22.7842 21.093C24.0637 21.093 25.262 21.441 26.2896 22.0474C24.8895 23.6339 24.04 25.7177 24.04 28C24.04 30.2823 24.8895 32.3661 26.2896 33.9526Z"
                fill="#7421FC"
              />
            </svg>
            <p
              style={{
                width: "215px",
                height: "33px",
                fontFamily: "manrope",
                fontWeight: "800px",
                fontSize: "24px",
                textAlign: "center",
                color: "#19154E",
              }}
            >
              UI/UX Design
            </p>
            <p
              style={{
                width: "286.33px",
                height: "88px",
                fontFamily: "Manrope",
                fontWeight: "500px",
                fontSize: "16px",
                textAlign: "center",
                color: "#19154E",
              }}
            >
              Creating intuitive and engaging user experiences with seamless
              interface designs that delight and retain users.
            </p>
          </div>
          <div className="card">
            {" "}
            <svg
              width="57"
              height="56"
              viewBox="0 0 57 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.833282"
                width="56"
                height="56"
                rx="10"
                fill="#F6F4FF"
              />
              <path
                d="M35.3333 26.5C35.3333 27.9834 34.8934 29.4334 34.0693 30.6668C33.2452 31.9002 32.0739 32.8614 30.7034 33.4291C29.333 33.9968 27.825 34.1453 26.3701 33.8559C24.9153 33.5665 23.5789 32.8522 22.53 31.8033C21.4811 30.7544 20.7668 29.418 20.4774 27.9632C20.188 26.5083 20.3365 25.0003 20.9042 23.6299C21.4719 22.2594 22.4331 21.0881 23.6665 20.264C24.8999 19.4399 26.3499 19 27.8333 19C29.8224 19 31.7301 19.7902 33.1366 21.1967C34.5431 22.6032 35.3333 24.5109 35.3333 26.5ZM42.0333 40.7125C41.8466 40.8963 41.5953 40.9996 41.3333 41C41.0678 40.9989 40.8127 40.896 40.6208 40.7125L35.2208 35.3C32.9465 37.2103 30.0226 38.1688 27.0588 37.9756C24.095 37.7825 21.3202 36.4526 19.3131 34.2633C17.306 32.074 16.2216 29.1944 16.286 26.225C16.3504 23.2556 17.5587 20.4258 19.6589 18.3256C21.7591 16.2254 24.5889 15.0172 27.5583 14.9527C30.5277 14.8883 33.4073 15.9727 35.5966 17.9798C37.7859 19.9869 39.1157 22.7617 39.3089 25.7255C39.5021 28.6893 38.5435 31.6132 36.6333 33.8875L42.0333 39.2875C42.1278 39.3806 42.2028 39.4915 42.254 39.6138C42.3052 39.7361 42.3316 39.8674 42.3316 40C42.3316 40.1326 42.3052 40.2639 42.254 40.3862C42.2028 40.5085 42.1278 40.6195 42.0333 40.7125ZM27.8333 36C29.7122 36 31.5489 35.4428 33.1112 34.399C34.6735 33.3551 35.8911 31.8714 36.6101 30.1355C37.3292 28.3996 37.5173 26.4895 37.1508 24.6467C36.7842 22.8038 35.8794 21.1111 34.5508 19.7825C33.2222 18.4539 31.5295 17.5491 29.6867 17.1826C27.8438 16.816 25.9337 17.0041 24.1978 17.7232C22.4619 18.4422 20.9782 19.6598 19.9343 21.2221C18.8905 22.7844 18.3333 24.6211 18.3333 26.5C18.3366 29.0186 19.3386 31.433 21.1194 33.2139C22.9003 34.9948 25.3148 35.9967 27.8333 36Z"
                fill="#7421FC"
              />
            </svg>
            <p
              style={{
                width: "215px",
                height: "33px",
                fontFamily: "manrope",
                fontWeight: "800px",
                fontSize: "24px",
                textAlign: "center",
                color: "#19154E",
              }}
            >
              SEO Optimization
            </p>
            <p
              style={{
                width: "286.33px",
                height: "88px",
                fontFamily: "Manrope",
                fontWeight: "500px",
                fontSize: "16px",
                textAlign: "center",
                color: "#19154E",
              }}
            >
              Managing your content efficiently with tailored CMS solutions that
              streamline your workflow and update processes.
            </p>
          </div>
        </div>
        <div className="web-desoghn-services">
          <div className="card">
            <svg
              width="57"
              height="56"
              viewBox="0 0 57 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.166687"
                width="56"
                height="56"
                rx="10"
                fill="#F6F4FF"
              />
              <path
                d="M40.5875 23C40.5877 22.7374 40.5359 22.4774 40.4351 22.235C40.3343 21.9925 40.1864 21.7725 40 21.5875L34.4125 16C34.036 15.629 33.5286 15.421 33 15.421C32.4714 15.421 31.964 15.629 31.5875 16L16.5875 31C16.393 31.1919 16.2398 31.4216 16.1375 31.675L16.1 31.775C16.0344 31.9812 16.0007 32.1961 16 32.4125V38C16 38.5304 16.2107 39.0391 16.5858 39.4142C16.9609 39.7893 17.4696 40 18 40H23.5875C23.8051 40.0013 24.021 39.9632 24.225 39.8875L24.325 39.8625C24.5784 39.7602 24.8081 39.607 25 39.4125L35.4625 28.95L35.8875 30.6875L31.2875 35.2875C31.0997 35.4771 30.9944 35.7331 30.9944 36C30.9944 36.2668 31.0997 36.5229 31.2875 36.7125C31.4786 36.8973 31.7341 37.0006 32 37.0006C32.2659 37.0006 32.5214 36.8973 32.7125 36.7125L37.7125 31.7125C37.8297 31.5871 37.9149 31.4352 37.9606 31.2698C38.0063 31.1043 38.0112 30.9303 37.975 30.7625L37.1125 27.3125L40 24.4125C40.1864 24.2275 40.3343 24.0075 40.4351 23.765C40.5359 23.5226 40.5877 23.2626 40.5875 23ZM36 25.5875L30.4125 20L33 17.4125L38.5875 23L36 25.5875Z"
                fill="#7421FC"
              />
            </svg>
            <p
              style={{
                width: "215px",
                height: "33px",
                fontFamily: "manrope",
                fontWeight: "800px",
                fontSize: "24px",
                textAlign: "center",
                color: "#19154E",
              }}
            >
              CMS Service
            </p>
            <p
              style={{
                width: "286.33px",
                height: "88px",
                fontFamily: "Manrope",
                fontWeight: "500px",
                fontSize: "16px",
                textAlign: "center",
                color: "#19154E",
              }}
            >
              Managing your content efficiently with tailored CMS solutions that
              streamline your workflow and update processes.
            </p>
          </div>
          <div className="card">
            <svg
              width="57"
              height="56"
              viewBox="0 0 57 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" width="56" height="56" rx="10" fill="#F6F4FF" />
              <g clip-path="url(#clip0_12_162)">
                <path
                  d="M21.621 37L16.569 19.72H19.605L23.049 32.2L26.481 19.744L29.517 19.72L32.961 32.2L36.393 19.72H39.429L34.389 37H31.533L27.993 24.712L24.477 37H21.621Z"
                  fill="#7421FC"
                />
              </g>
              <defs>
                <clipPath id="clip0_12_162">
                  <rect
                    width="32"
                    height="32"
                    fill="white"
                    transform="translate(12.5 12)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p
              style={{
                width: "215px",
                height: "33px",
                fontFamily: "manrope",
                fontWeight: "800px",
                fontSize: "24px",
                textAlign: "center",
                color: "#19154E",
              }}
            >
              WordPress Service
            </p>
            <p
              style={{
                width: "286.33px",
                height: "88px",
                fontFamily: "Manrope",
                fontWeight: "500px",
                fontSize: "16px",
                textAlign: "center",
                color: "#19154E",
              }}
            >
              Offering specialized WordPress services, from custom themes and
              plugins to full site builds, ensuring a robust and dynamic online
              platform.
            </p>
          </div>
          <div className="card">
            <svg
              width="57"
              height="56"
              viewBox="0 0 57 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.833282"
                width="56"
                height="56"
                rx="10"
                fill="#F6F4FF"
              />
              <g clip-path="url(#clip0_12_170)">
                <path
                  d="M39.6667 14.6667H18.3333C16.8667 14.6667 15.6667 15.8667 15.6667 17.3334V41.3334L21 36H39.6667C41.1333 36 42.3333 34.8 42.3333 33.3334V17.3334C42.3333 15.8667 41.1333 14.6667 39.6667 14.6667ZM39.6667 33.3334H21L18.3333 36V17.3334H39.6667V33.3334ZM22.3333 24H25V26.6667H22.3333V24ZM27.6667 24H30.3333V26.6667H27.6667V24ZM33 24H35.6667V26.6667H33V24Z"
                  fill="#7421FC"
                />
              </g>
              <defs>
                <clipPath id="clip0_12_170">
                  <rect
                    width="32"
                    height="32"
                    fill="white"
                    transform="translate(13 12)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p
              style={{
                width: "215px",
                height: "33px",
                fontFamily: "manrope",
                fontWeight: "800px",
                fontSize: "24px",
                textAlign: "center",
                color: "#19154E",
              }}
            >
              {" "}
              Consultancy
            </p>
            <p
              style={{
                width: "286.33px",
                height: "88px",
                fontFamily: "Manrope",
                fontWeight: "500px",
                fontSize: "16px",
                textAlign: "center",
                color: "#19154E",
              }}
            >
              Providing expert advice and strategic solutions to help your
              business thrive in the digital world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
