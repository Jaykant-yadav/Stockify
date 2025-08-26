import React from 'react'

export default function ChargeAccOpening() {
    return (
        <>
            <div className='container my-5 px-5'>
                <p className='fs-5 fw-semibold text-center mb-5'><a href='' className='text-decoration-none'>Calculate your costs upfront</a> using our brokerage calculator</p>
                <div className='mt-5 py-5'>
                    <h4>Charges for account opening</h4>
                    <table className="table table-bordered mt-4">
                        <thead>
                            <tr>
                                <th className='text-start'>Type of account</th>
                                <th>Charges</th>
                            </tr>
                        </thead>
                        <tbody className='text-start'>
                            <tr>
                                <td>Online account</td>
                                <td><span class="badge text-bg-success">Free</span></td>
                            </tr>
                            <tr>
                                <td>Offline account	</td>
                                <td><span class="badge text-bg-success">Free</span></td>
                            </tr>
                            <tr>
                                <td>NRI account (offline only)	</td>
                                <td>₹ 500</td>
                            </tr>
                            <tr>
                                <td>Partnership, LLP, HUF, or Corporate accounts (offline only)	</td>
                                <td>₹ 500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='mt-5'>
                    <h4>Demat AMC (Annual Maintenance Charge)</h4>
                    <table className="table table-bordered mt-4">
                        <thead>
                            <tr>
                                <th className='text-start'>Value of holdings</th>
                                <th>AMC</th>
                            </tr>
                        </thead>
                        <tbody className='text-start'>
                            <tr>
                                <td>Up to ₹4 lakh</td>
                                <td><span class="badge text-bg-success">Free</span></td>
                            </tr>
                            <tr>
                                <td>₹4 lakh - ₹10 lakh	</td>
                                <td>₹ 100 per year, charged quarterly*</td>
                            </tr>
                            <tr>
                                <td>Above ₹10 lakh	</td>
                                <td>₹ 300 per year, charged quarterly</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='text-muted'>
                    <p style={{fontSize: "14px", fontWeight: "400"}}>* Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA, <a href='#' className='text-decoration-none'>click here.</a></p>
                </div>

                <div className='mt-5'>
                    <h4>Charges for optional value added services</h4>
                    <table className="table table-bordered mt-4">
                        <thead>
                            <tr>
                                <th>Service</th>
                                <th>Billing Frquency	</th>
                                <th>Charges</th>
                            </tr>
                        </thead>
                        <tbody className='text-start'>
                            <tr>
                                <td>Tickertape	</td>
                                <td>Monthly / Annual	</td>
                                <td>Free: 0 | Pro: 249/2399</td>
                            </tr>
                            <tr>
                                <td>Smallcase	</td>
                                <td>Per transaction	</td>
                                <td>Buy & Invest More: 100 | SIP: 10</td>
                            </tr>
                            <tr>
                                <td>Kite Connect	</td>
                                <td>Monthly	</td>
                                <td>Connect: 500 | Personal: Free	</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
