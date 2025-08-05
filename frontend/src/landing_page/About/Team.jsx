import React from 'react'
import { fontStyle } from './Hero'

export const ImageStyle = {
  width: '60%',
  margin: '0 auto',
  display: 'block',
  borderRadius: '50%',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
}

export default function Team() {
  return (
    <>
      <div className='container mt-2 mb-5'>
          <div className='row p-5  shadow rounded-4'>
          <h3 className='text-center'>Founder, CEO</h3>
            <div className='col-6 p-5'>
              <img src='Media/nithinKamath.jpg' alt='Hero Image' className='mb-5 mx-auto shadow' style={ImageStyle}/>
              <p className='text-center fs-5 fw-semibold'>Nithin Kamath</p>
            </div>
            <div className='col-6 p-5 mt-5'>
                <p style={fontStyle}>
                  Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                  hurdles he faced during his decade long stint as a trader.
                  Today, Zerodha has changed the landscape of the Indian broking
                  industry.
                </p>
                <p style={fontStyle}> 
                  He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                </p>
                <p style={fontStyle}>Playing basketball is his zen.</p>
                <p style={fontStyle}>
                  Connect on&nbsp;
                  <a href="/" className='text-decoration-none'> Homepage</a> /
                  <a href="/" className='text-decoration-none'> TradingQnA</a> /
                  <a href="/" className='text-decoration-none'> Twitter</a>
                </p>
            </div>
          </div>
        </div>
    </>
  )
}
