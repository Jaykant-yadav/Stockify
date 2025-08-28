import React from 'react'

const boxStyle = {
    width: "20rem",
    height: "9rem",
    padding: "1rem",
    cursor: "pointer",
    // display: "flex",
    // flexDirection: "column",
    justifyContent: "center",
}

function AccountTypes() {
    return (
        <>
            <div className='container bg-light rounded-3 py-5 px-5 mb-5'>
                <h4 className='text-center text-muted'>Explore different account types</h4>
                <div className=''>
                    <div className='row mt-3 text-center g-5 justify-content-between'>
                        <div className='col-4'>
                            <a href='#' className='text-decoration-none'>
                                <div className='border border-2 rounded-2' style={boxStyle}>
                                    <h5 className='text-dark'> <i class="bi bi-person-circle"></i> &nbsp;Individual Account</h5>
                                    <p className='text-secondary'>Invest in equity, mutual funds and derivatives</p>
                                </div>
                            </a>
                        </div>
                        <div className='col-4'>
                            <a href='#' className='text-decoration-none'>
                                <div className='border border-2 rounded-2' style={boxStyle}>
                                    <h5 className='text-dark'><i class="bi bi-people-fill"></i> &nbsp;HUF Account</h5>
                                    <p className='text-secondary'>Make tax-efficient investments for your family</p>
                                </div>
                            </a>
                        </div>
                        <div className='col-4'>
                            <a href='#' className='text-decoration-none'>
                                <div className='border border-2 rounded-2' style={boxStyle}>
                                    <h5 className='text-dark'><i class="bi bi-globe2"></i> &nbsp;NRI Account</h5>
                                    <p className='text-secondary'>Invest in equity, mutual funds, debentures, and more</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className='row mt-3 mb-5 g-5 text-center justify-content-between'>
                        <div className='col-2'></div>
                        <div className='col-4'>
                            <a href='#' className='text-decoration-none'>
                                <div className='border border-2 rounded-2' style={boxStyle}>
                                    <h5 className='text-dark'><i class="fa-solid fa-children"></i> &nbsp;Minor Account</h5>
                                    <p className='text-secondary'>Teach your little ones about money & invest for their future with them</p>
                                </div>
                            </a>
                        </div>
                        <div className='col-4'>
                            <a href='#' className='text-decoration-none'>
                                <div className='border border-2 rounded-2' style={boxStyle}>
                                    <h5 className='text-dark'><i class="bi bi-buildings"></i> &nbsp;Corporate / LLP/ Partnership</h5>
                                    <p className='text-secondary'>Manage your business surplus and investments easily</p>
                                </div>
                            </a>
                        </div>
                        <div className='col-2'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountTypes