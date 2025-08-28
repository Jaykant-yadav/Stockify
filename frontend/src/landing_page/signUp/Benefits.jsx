import React from 'react'

export default function Benefits() {
    return (
        <>
            <div className='container px-5 mb-5 bg-light rounded-3 py-5'>
                <div className='row px-5 p-5'>
                    <div className='col-6 text-center d-flex flex-column align-items-center mt-5'>
                        <img src='Media\acop-benefits.svg' style={{width: "25rem"}}/>
                        <h4 className='mt-3'>Benefits of opening a Zerodha demat account</h4>
                    </div>
                    <div className='col-6'>
                        <h5 className='text-muted'>Unbeatable pricing</h5>
                        <p className='text-muted my-4'>Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>
                        <h5 className='text-muted'>Best investing experience</h5>
                        <p className='text-muted my-4'>Simple and intuitive trading platform with an easy-to-understand user interface.</p>
                        <h5 className='text-muted'>No spam or gimmicks</h5>
                        <p className='text-muted my-4'>Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>
                        <h5 className='text-muted'>The Zerodha universe</h5>
                        <p className='text-muted my-4'>More than just an app — gain free access to the entire ecosystem of our partner products.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
