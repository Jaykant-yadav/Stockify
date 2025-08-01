import React from "react";
// import './index.css'

const paraStyle = {
  fontSize: "1.1rem",
};

const imageStyle = {
  width: "40rem",
};

export default function Ecosystem() {
  return (
    <>
      <div className="container px-5">
        <div className="row p-5">
          <div className="col-5">
            <h3>Trust with confidence</h3>
            <div className="mt-5 mb-4">
              <h5>Customer-first always</h5>
              <p className="text-muted" style={paraStyle}>
                That's why 1.6+ crore customers trust Zerodha with ~ ₹6 <br />
                lakh crores of equity investments, making us India’s <br />
                largest broker; contributing to 15% of daily <br />
                retail exchange volumes in India.
              </p>
            </div>

            <div className="mt-5 mb-4">
              <h5>No spam or gimmicks</h5>
              <p className="text-muted" style={paraStyle}>
                No gimmicks, spam, "gamification", or annoying push <br />
                notifications. High quality apps that you use at your <br />
                pace, the way you like. <a href="" className="text-decoration-none">Our philosophies</a>.
              </p>
            </div>

            <div className="mt-5 mb-4">
              <h5>The Zerodha universe</h5>
              <p className="text-muted" style={paraStyle}>
                Not just an app, but a whole ecosystem. Our investments <br />
                in 30+ fintech startups offer you tailored services <br />
                specific to your needs.
              </p>
            </div>

            <div className="mt-5 mb-4">
              <h5>Do better with money</h5>
              <p className="text-muted" style={paraStyle}>
                With initiatives like <a href="" className="text-decoration-none">Nudge</a> and <a className="text-decoration-none">Kill Switch</a>, we don't just
                <br /> facilitate transactions, but actively help you do better{" "}
                <br />
                with your money.
              </p>
            </div>
          </div>
          <div className="col-7">
            <a href="/">
              <img src="Media/ecosystem.png" style={imageStyle} />
            </a>
            <div className="row p-4 text-center ms-4">
              <div className="col-6">
                <a
                  href=""
                  className="text-decoration-none fw-semibold"
                  style={{ fontSize: "17px" }}
                >
                  Explore our products <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
              <div className="col-6">
                <a
                  href=""
                  className="text-decoration-none fw-semibold"
                  style={{ fontSize: "17px" }}
                >
                  Try Kite Demo <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
