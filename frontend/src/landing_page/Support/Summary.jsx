import React from 'react'

export default function Summary() {
    return (
        <>
            <div className='container my-5 px-5'>
                <div className='row px-5'>
                    <div className='col-8'>
                        <div class="accordion accordion-flush" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button border border-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <i class="fa-solid fa-circle-plus"></i> &nbsp; Account Opening
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <ul class="list-group">
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">Resident individual</li></a>
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">Minor</li></a>
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">Non Resident Indian (NRI)</li></a>
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">Company, Partnership, HUF and LLP</li></a>
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">Glossary</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item mt-4">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed border border-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <i class="bi bi-person-bounding-box"></i> &nbsp; Your Stockify Account
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <ul class="list-group">
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">Your Profile</li></a>
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">Account Modification</li></a>
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">Client Master Report (CMR) and Depository Participant (DP)</li></a>
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">Nomination</li></a>
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">Transfer and conversion of securities</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item mt-4">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed border border-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <i class="bi bi-compass"></i> &nbsp; Kite
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <ul class="list-group">
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">IPO</li></a>
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">Trading FAQs</li></a>
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">Margin Trading Facility (MTF) and Margins</li></a>
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">Charts and orders</li></a>
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">Alerts and Nudges</li></a>
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">General</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item mt-4">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed border border-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        <i class="fa-solid fa-indian-rupee-sign"></i> &nbsp; Funds
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <ul class="list-group">
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">Add Money</li></a>
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">Withdraw Money</li></a>
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">Add bank accounts</li></a>
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">eMandates</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item mt-4">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed border border-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        <i class="bi bi-activity"></i> &nbsp; Console
                                    </button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <ul class="list-group">
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">Portfolio</li></a>
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">Corporate actions</li></a>
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">Funds statement</li></a>
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">Reports</li></a>
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">Profile</li></a>
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">Segments</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item mt-4">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed border border-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        <i class="fa-solid fa-coins"></i> &nbsp; Coin
                                    </button>
                                </h2>
                                <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <ul class="list-group">
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">Mutual funds</li></a>
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">National Pension Scheme (NPS)</li></a>
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">Fixed Deposit (FD)</li></a>
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">Features on Coin</li></a>
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">Payments and Orders</li></a>
                                            <a href='#' className='text-decoration-none'><li class="p-2 ms-5">General</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='p-3' style={{ backgroundColor: "#ff91001a" }}>
                            <ul>
                                <a href='#'><li>Exclusion of F&O contracts on 8 securities from August 29, 2025</li></a>
                                <a href='#'><li>Revision in expiry day of Index and Stock derivatives contracts</li></a>
                            </ul>
                        </div>

                        <div className='mt-5'>
                            <ul className='list-group'>
                                <li className="list-group-item bg-secondary text-white" aria-current="true">Quick links</li>
                                <ol class="list-group list-group-numbered">
                                    <a href='#' className='text-decoration-none'><li className="list-group-item list-group-item-action text-primary">Track account opening</li></a>
                                    <a href='#' className='text-decoration-none'><li className="list-group-item list-group-item-action text-primary">Track segments activation</li></a>
                                    <a href='#' className='text-decoration-none'><li className="list-group-item list-group-item-action text-primary">Intraday margins</li></a>
                                    <a href='#' className='text-decoration-none'><li className="list-group-item list-group-item-action text-primary">Kite user manual</li></a>
                                </ol>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
