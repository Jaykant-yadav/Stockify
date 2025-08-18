import React from 'react'
import { useRef } from "react";


export default function Hero() {
  const searchRef = useRef(null);
  const focusSearch = () => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };

  return (
    <>
      <div className="container px-5">
        <div className="row p-5">
          <div className='col-3'><h2>Support Portal</h2></div>
          <div className='col-9 justify-content-end align-items-center d-flex'>
            <button className='btn btn-primary j'>My tickets</button>
          </div>
        </div>

        <div className="px-5">
          <form className="d-flex" role="search">
            <div className="input-group" style={{ height: "55px" }}>
              <span
                className="input-group-text bg-white border-end-0"
                style={{ cursor: "pointer" }}
                onClick={focusSearch}
              >
                <i className="bi bi-search"></i>
              </span>
              <input
                ref={searchRef}
                type="search"
                className="form-control border-start-0 "
                placeholder="Eg: How do I open my account, How do I activate F&O..."
                aria-label="Search"
              />
            </div>
          </form>

        </div>
      </div>
    </>
  )
}
