import React from 'react'

const fontStyle = {
  fontSize: '12px',
}

export default function Footer() {
  return (
    <>
      <footer style={{ backgroundColor: '#f8f9fa', color: '#6c757d' }}>
        <div className="container px-5 py-4">
          <div className='row px-5'>
            <div className='col-4'>
              <div className=''>
                <a className="navbar-brand fs-3" href="#">
                  <i className="bi bi-bar-chart-fill me-2 text-primary"></i>
                  <span className="fw-bold text-dark">Stock</span><span className="fw-light text-primary">ify</span>
                </a>
                <p className='mt-3'>© 2022-2026, Stockify Broker Private Ltd. <br />All rights reserved.</p>
                <div className='row fs-5'>
                  <div className='col-1 text-muted'><i className="fa-brands fa-x-twitter"></i></div>
                  <div className='col-1 text-muted'><i className="fa-brands fa-instagram"></i></div>
                  <div className='col-1 text-muted'><i className="fa-brands fa-facebook"></i></div>
                  <div className='col-1 text-muted'><i className="fa-brands fa-linkedin"></i></div>
                </div>
                <p>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</p>
                <div className='row fs-5'>
                  <div className='col-1 text-muted'><i className="fa-brands fa-youtube"></i></div>
                  <div className='col-1 text-muted'><i className="fa-brands fa-whatsapp"></i></div>
                  <div className='col-1 text-muted'><i className="fa-brands fa-telegram"></i></div>
                </div>
              </div>
            </div>
            <div className='col-2'>
              <h5>Company</h5>
              <ul className='list-unstyled mt-3'>
                <li><a href="/" className='text-decoration-none text-muted'>About Us</a></li>
                <li className='mt-2'><a href="/" className='text-decoration-none text-muted'>Careers</a></li>
                <li className='mt-2'><a href="/" className='text-decoration-none text-muted'>Press & Media</a></li>
                <li className='mt-2'><a href="/" className='text-decoration-none text-muted'>Open Source</a></li>
                <li className='mt-2'><a href="/" className='text-decoration-none text-muted'>Philosophy</a></li>
                <li className='mt-2'><a href="/" className='text-decoration-none text-muted'>Stockify.in</a></li>
              </ul>
            </div>
            <div className='col-2'>
              <h5>Support</h5>
              <ul className='list-unstyled mt-3'>
                <li><a href="/" className='text-decoration-none text-muted'>Support Portel</a></li>
                <li className='mt-2'><a href="/" className='text-decoration-none text-muted'>Help Center</a></li>
                <li className='mt-2'><a href="/" className='text-decoration-none text-muted'>How to file a complaint?</a></li>
                <li className='mt-2'><a href="/" className='text-decoration-none text-muted'>Contact Us</a></li>
                <li className='mt-2'><a href="/" className='text-decoration-none text-muted'>Privacy Policy</a></li>
                <li className='mt-2'><a href="/" className='text-decoration-none text-muted'>Terms of Service</a></li>
              </ul>
            </div>
            <div className='col-2'>
              <h5>Account</h5>
              <ul className='list-unstyled mt-3'>
                <li><a href="/" className='text-decoration-none text-muted'>Open demat account</a></li>
                <li className='mt-2'><a href="/" className='text-decoration-none text-muted'>Minor demat account</a></li>
                <li className='mt-2'><a href="/" className='text-decoration-none text-muted'>NRI demat account</a></li>
                <li className='mt-2'><a href="/" className='text-decoration-none text-muted'>Student demet account</a></li>
                <li className='mt-2'><a href="/" className='text-decoration-none text-muted'>Free demet account</a></li>
                <li className='mt-2'><a href="/" className='text-decoration-none text-muted'>Fund transfer</a></li>
              </ul>
            </div>
            <div className='col-2'>
              <h5>Resources</h5>
              <ul className='list-unstyled mt-3'>
                <li><a href="/" className='text-decoration-none text-muted'>Upcoming IPOs</a></li>
                <li className='mt-2'><a href="/" className='text-decoration-none text-muted'>Brokerage charges</a></li>
                <li className='mt-2'><a href="/" className='text-decoration-none text-muted'>Market holidays</a></li>
                <li className='mt-2'><a href="/" className='text-decoration-none text-muted'>Markets</a></li>
                <li className='mt-2'><a href="/" className='text-decoration-none text-muted'>Calculators</a></li>
                <li className='mt-2'><a href="/" className='text-decoration-none text-muted'>Economic calendar</a></li>
              </ul>
            </div>
          </div>
          <div class="row smallprint mt-4 px-5">
            <p className='text-muted' style={fontStyle}>
              Zerodha Broking Ltd.: Member of NSE, BSE​ &amp;​ MCX – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
              Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
              – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
              Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
              School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
              any complaints pertaining to securities broking please write to &nbsp;
              <a href="/" className='text-decoration-none fw-semibold'>complaints@Stockify.com</a>, for
              DP related to <a href="/" className='text-decoration-none fw-semibold'>dp@zerodha.com</a>. Please
              ensure you carefully read the Risk Disclosure Document as prescribed by
              SEBI | ICF
            </p>
            <p className='text-muted' style={fontStyle}>
              Procedure to file a complaint on <a rel="nofollow" href="/" target="_blank" className='text-decoration-none fw-semibold'>SEBI SCORES</a>:
              Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number,
              E-mail ID.
              Benefits: Effective Communication, Speedy redressal of the grievances
            </p>
            <p className='text-muted' style={fontStyle}>
              <a rel="nofollow" href="/" target="_blank" className='text-decoration-none fw-semibold'>Smart Online Dispute Resolution</a> | <a href="/" target="_blank" className='text-decoration-none fw-semibold'>Grievances Redressal Mechanism</a>
            </p>
            <p className='text-muted' style={fontStyle}>
              Investments in securities market are subject to market risks; read all the related documents carefully before investing.
            </p>
            <p className='text-muted' style={fontStyle}>
              Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
            </p>
            <p className='text-muted' style={fontStyle}>
              India's largest broker based on networth as per NSE. <a rel="nofollow" href="/" target="_blank" className='text-decoration-none fw-semibold'>NSE broker factsheet</a>
            </p>
            <p className='text-muted' style={fontStyle}>
              "Prevent unauthorised transactions in your account. Update your mobile
              numbers/email IDs with your stock brokers. Receive information of your
              transactions directly from Exchange on your mobile/email at the end of
              the day. Issued in the interest of investors. KYC is one time exercise
              while dealing in securities markets - once KYC is done through a SEBI
              registered intermediary (broker, DP, Mutual Fund etc.), you need not
              undergo the same process again when you approach another intermediary."
              Dear Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the IPO
              application form to authorize your bank to make payment in case of
              allotment. In case of non allotment the funds will remain in your bank
              account. As a business we don't give stock tips, and have not authorized
              anyone to trade on behalf of others. If you find anyone claiming to be
              part of Zerodha and offering such services, please &nbsp;
              <a href="/" className='text-decoration-none fw-semibold'>create a ticket here</a>.
            </p>
          </div>

          <div className='mx-5 px-5'>
            <div className='text-center mt-2'>
              <ul className='list-unstyled d-flex justify-content-center gap-3 text-muted'>
                <li>
                  <a href="/" className='text-decoration-none fw-semibold text-muted'>NSE</a>
                </li>
                <li>
                  <a href="/" className='text-decoration-none fw-semibold text-muted'>BSE</a>
                </li>
                <li>
                  <a href="/" className='text-decoration-none fw-semibold text-muted'>MCX</a>
                </li>
                <li>
                  <a href="/" className='text-decoration-none fw-semibold text-muted'>Terms &amp; conditions</a>
                </li>
                <li>
                  <a href="/" className='text-decoration-none fw-semibold text-muted'>Policies &amp; procedures</a>
                </li>
                <li>
                  <a href="/" className='text-decoration-none fw-semibold text-muted'>Privacy policy</a>
                </li>
                <li>
                  <a href="/" className='text-decoration-none fw-semibold text-muted'>Disclosure</a>
                </li>
                <li>
                  <a href="/" className='text-decoration-none fw-semibold text-muted'>For investor's attention</a>
                </li>
                <li>
                  <a href="/" className='text-decoration-none fw-semibold text-muted'>Investor charter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
