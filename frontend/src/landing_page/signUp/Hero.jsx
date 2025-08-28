import React from 'react'

function Hero() {
    return (
        <>
            <div className='container my-5 px-5'>
                <div className='text-center py-5'>
                    <h3 className='text-muted'>Open a free demat and trading account online</h3>
                    <p className='fs-5 text-muted'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
                </div>

                <div className='row px-5'>
                    <div className='col-md-6 mb-4'>
                        <img src='Media\account_open.svg' />
                    </div>
                    <div className='col-md-6 d-flex flex-column justify-content-center align-items-start'>
                        <h3>Signup now</h3>
                        <p className='text-muted fs-6 fw-semibold'>Or track your existing application</p>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">
                                <img src='Media\india-flag.svg'/> &nbsp; +91
                            </span>
                            <input type="number" class="form-control p-3" placeholder="Enter your mobile number" aria-label="Username" aria-describedby="basic-addon1" style={{width: "15px"}}/>
                            <button className='btn btn-primary'>Get OTP</button>
                        </div>
                        <p>By proceeding, you agree to the Zerodha <a href='#' className='text-decoration-none'>terms</a> & <a href='#' className='text-decoration-none'>privacy policy</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero