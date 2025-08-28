import React from 'react'

function StepsOfdematAcc() {
    return (
        <div className='container px-5 my-5 bg-light rounded-3 py-5'>
            <h4 className='text-center text-muted'>Steps to open a demat account with Zerodha</h4>
            <div className=' row text-center my-5'>
                <div className='col-6'>
                    <img src='Media\steps-acop.svg' />
                </div>
                <div className='col-6 d-flex align-items-center mt-2'>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex align-items-center fs-5 fw-semibold text-muted bg-light">
                            <span class="badge text-bg-secondary rounded-pill me-3">01</span>
                            Enter the requested details
                        </li>
                        <li class="list-group-item d-flex align-items-center fs-5 fw-semibold text-muted bg-light">
                            <span class="badge text-bg-secondary rounded-pill me-3">02</span>
                            Complete e-sign & verification
                        </li>
                        <li class="list-group-item d-flex align-items-center fs-5 fw-semibold text-muted bg-light">
                            <span class="badge text-bg-secondary rounded-pill me-3">03</span>
                            Start investing!
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default StepsOfdematAcc;