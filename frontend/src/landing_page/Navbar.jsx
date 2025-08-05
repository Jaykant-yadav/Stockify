import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid mx-5 px-5">
          <Link className="navbar-brand fs-3 mx-5" to="/">
            <i className="bi bi-bar-chart-fill me-2 text-primary"></i>
            <span className="fw-bold text-dark">Stock</span><span className="fw-light text-primary">ify</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0 gap-4">
              <li className="nav-item">
                <Link className="nav-link fw-semibold " to="/signup">Signup</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/supports">Supports</Link>
              </li>
            </ul>
            <div className="d-flex mx-5">
              <Link className="nav-link" to="/"><i className="fa-solid fa-bars"></i></Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
