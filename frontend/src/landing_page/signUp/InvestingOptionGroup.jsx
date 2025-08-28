import React from 'react'

function InvestingOptionGroup() {
  return (
    <>
      <div className='container px-5 mb-5 bg-light rounded-3 py-5'>
        <h4 className='text-center text-muted'>Investment options with Zerodha demat account</h4>
        <div className='row px-5 py-5 mt-3'>
          <div className='col-6'>
            <div className='row px-5'>
              <div className='col-4'>
                <img src='Media\stocks-acop.svg' />
              </div>
              <div className='col-8'>
                <h4 className='text-muted'>Stocks</h4>
                <p className='fs-6 text-muted'>Invest in all exchange-listed securities</p>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='row px-5'>
              <div className='col-4'>
                <img src='Media\mf-acop.svg' />
              </div>
              <div className='col-8'>
                <h4 className='text-muted'>Mutual funds</h4>
                <p className='fs-6 text-muted'>Invest in commission-free direct mutual funds</p>
              </div>
            </div>
          </div>
        </div>
        <div className='row px-5 d-flex align-items-center'>
          <div className='col-6'>
            <div className='d-flex'>
            </div>
            <div className='row px-5'>
              <div className='col-4'>
                <img src='Media\ipo-acop.svg' />
              </div>
              <div className='col-8'>
                <h4 className='text-muted'>IPO</h4>
                <p className='fs-6 text-muted'>Apply to the latest IPOs instantly via UPI</p>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='row px-5'>
              <div className='col-4'>
                <img src='Media\fo-acop.svg' />
              </div>
              <div className='col-8'>
                <h4 className='text-muted'>Futures & options</h4>
                <p className='fs-6 text-muted'>Hedge and mitigate market risk through simplified F&O trading</p>
              </div>
            </div>
          </div>
        </div>

        <div className='text-center my-5'>
          <button className='btn btn-primary w-25 fw-semibold'>Explore Investment</button>
        </div>
      </div>
    </>
  )
}

export default InvestingOptionGroup;