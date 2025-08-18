import OpenAccount from '../OpenAccount'
const imageStyle = {
  width: "14rem",
  height: "4rem"
};

const paraStyle = {
  fontSize: "0.8rem",
  marginTop: "1rem",
  fontWeight: "500",
  color: "#9b9b9b"
}

export default function Universe() {
  return (
    <>
      <div className="container">
        <div className='text-center py-5'>
          <p className='fs-5 text-muted'>Want to know more about our technology stack? Check out the <a href='#' className='text-decoration-none fw-semibold'>Stockify.tech</a> blog.</p>
        </div>
        <div>
          <h4 className='text-center'>The Zerodha Universe</h4>
          <p className='text-center py-2'>Extend your trading and investment experience even further with our partner platforms</p>
          <div className='row px-5 text-center'>
            <div className='col-4 p-5'>
              <a href=''><img src='Media\zerodhaFundhouse.png' style={imageStyle}  /></a>
              <p style={paraStyle}>Our asset management venture
                that is creating simple and transparent index
                funds to help you save for your goals.</p>
            </div>
            <div className='col-4 p-5'>
              <a href=''><img src='Media\sensibullLogo.svg' style={imageStyle} /></a>
              <p style={paraStyle}>Options trading platform that lets you
                create strategies, analyze positions, and examine
                data points like open interest, FII/DII, and more.</p>
            </div>
            <div className='col-4 p-5'>
              <a href=''><img src='Media\tijori.svg' style={imageStyle}  /></a>
              <p style={paraStyle}>Investment research platform
                that offers detailed insights on stocks,
                sectors, supply chains, and more.
              </p>
            </div>
          </div>
          <div className='row px-5 text-center'>
            <div className='col-4 p-5'>
              <a href=''><img src='Media\streakLogo.png' style={imageStyle} /></a>
              <p style={paraStyle}>Systematic trading platform
                that allows you to create and backtest
                strategies without coding.</p>
            </div>
            <div className='col-4 p-5'>
              <a href=''><img src='Media\smallcaseLogo.png' style={imageStyle} /></a>
              <p style={paraStyle}>Thematic investing platform
                that helps you invest in diversified
                baskets of stocks on ETFs.</p>
            </div>
            <div className='col-4 p-5'>
              <a href=''><img src='Media\dittoLogo.png' style={imageStyle} /></a>
              <p style={paraStyle}>Personalized advice on life
                and health insurance. No spam
                and no mis-selling.</p>
            </div>
          </div>
          <OpenAccount/>
        </div>
      </div>
    </>
  )
}
