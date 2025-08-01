import React from 'react'

export default function Hero() {
  return (
    <>
      <div className='container px-5 py-5'>
        <div className='row text-center p-5'>
          <img src='Media/homeHero.png' alt='Hero Image' className='mb-5 w-75 mx-auto' />
          <h1 className='mt-5 fs-3 text-muted'>Invest in everything</h1>
          <p className='mt-1 fs-5 text-secondary'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
          <button className='btn m-auto mt-5 fw-semibold fs-5 p-2 text-light' style={{ width: "18%", backgroundColor: "blue" }}> Sign up for free</button>
        </div>
      </div>
    </>
  )
}
