import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid mx-5 px-5">
          <a className="navbar-brand fs-3 mx-5" href="#">
            <i className="bi bi-bar-chart-fill me-2 text-primary"></i>
            <span className="fw-bold text-dark">Stock</span><span className="fw-light text-primary">ify</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0 gap-4">
              <li className="nav-item">
                <a className="nav-link fw-semibold " href="/">Signup</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="/services">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="/contact">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="/contact">Supports</a>
              </li>
            </ul>
            <div className="d-flex mx-5">
              <a className="nav-link" href="/"><i className="fa-solid fa-bars"></i></a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
