import React from 'react'

export default function OpenAccount() {
  return (
    <>
      <div className='container px-5 py-5 '>
        <div className='shadow py-5 my-5 rounded-4'>
          <h3 className='text-center mt-3'>Open an Stockify account</h3>
          <p className='text-center mt-3 text-muted'>Open an account with Stockify to start investing in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
          <div className='text-center mt-4'>
            <button className='btn btn-primary fw-semibold fs-5 p-2 text-light' style={{ width: "18%" }}>Open Account of free</button>
          </div>
        </div>
      </div>
    </>
  )
}
