
const priceImageStyle = {
  width: "8rem",
  marginTop: "1.2rem",
}

export default function Pricing() {
  return (
    <>
      <div className='container px-5 py-5'>
        <div className='row px-5'>
          <div className='col-5'>
            <h3>Transparent pricing</h3>
            <p className='mt-4'>We pioneered the concept of discount broking and price<br /> transparency in India. Flat fees and no hidden charges.</p>
            <a href='/' className='text-decoration-none text-primary fw-semibold'>See Pricing <i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className='col-7 mt-4'>
            <div className='row '>
              <div className='col-4'>
                <div className='row'>
                  <div className='col-6'>
                    <img src='Media/pricing0.svg' alt='Zerodha Logo' className='position-absolute' style={priceImageStyle} />
                  </div>
                  <div className='col-6'>
                    <p className='text-muted' style={{ fontSize: "10px", marginTop: "4.4rem" }}>Free account<b /> opening</p>
                  </div>
                </div>
              </div>
              <div className='col-4'>
                <div className='row'>
                  <div className='col-5'>
                    <img src='Media/pricingEquity.svg' alt='Coin Logo' style={priceImageStyle} />
                  </div>
                  <div className='col-7'>
                    <p className='text-muted' style={{ fontSize: "10px", marginTop: "4.4rem" }}>Free equity delivery<br />and direct mutual funds</p>
                  </div>
                </div>
              </div>
              <div className='col-4'>
                <div className='row'>
                  <div className='col-5'>
                    <img src='Media/pricingMF.svg' alt='Zerodha Kite Logo' style={priceImageStyle} />
                  </div>
                  <div className='col-7'>
                    <p className='text-muted' style={{ fontSize: "10px", marginTop: "4.4rem" }}>Intraday and <br/>F&O</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
