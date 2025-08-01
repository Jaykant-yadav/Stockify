import React from 'react'

export default function Education() {
  return (
    <>
      <div className="container px-5 py-5 mt-5">
        <div className="row px-5">
          <div className="col-6">
            <a href="/">
              <img
                src="Media/education.svg"
                alt="Education Image"
                style={{ width: "28rem" }}
              />
            </a>
          </div>
          <div className="col-6 mt-5">
            <h4>Free and open market education</h4>
            <p className="mt-4">
              Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
            </p>
            <a
              href="/"
              className="text-decoration-none text-primary fw-semibold"
            >
              Varsity <i className="fa-solid fa-arrow-right"></i>
            </a>
            <p className="mt-5">
              TradingQ&A, the most active trading and investment community in India for all your market related queries.
            </p>
            <a
              href="/"
              className="text-decoration-none text-primary fw-semibold"
            >
              TradingQ&A  <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
