import React from 'react'

function FAQs() {
    return (
        <>
            <div className='container px-5 mb-5 bg-light rounded-3 p-5'>
                <h4 className='text-center text-muted'>Frequently asked questions</h4>
                <div className='row px-5 py-5 mt-3'>
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    What is Stockify Account?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    What documents are required to open a demat account?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <div>
                                        <p>The following documents are required to open a Zerodha account online:</p>
                                        <ul>
                                            <li>PAN number</li>
                                            <li>Aadhaar Card (Linked with a phone number for OTP verification)</li>
                                            <li>Cancelled cheque or bank account statement (To link your bank account)</li>
                                            <li>Income proof (Required only if you wish to trade in Futures &amp; options)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Is Zerodha account opening free?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Yes, It is completely free.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    Are there any maintenance charges for a demat account?
                                </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <h5 className='text-muted'>Are there any maintenance charges for a demat account?</h5>
                                    <div>
                                        <p>The account maintaince charges is appliacable based on the account type.<br />
                                            For Basic Services Demat Account: Zero charges if the holding value is less than ₹4,00,000.<br />
                                            For non-Basic Services Demat Account demat accounts: ₹300 per year + GST.<br />
                                            To learn more about BSDA, <a href="#" className='text-decoration-none'>Click here</a>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                        Can I open a demat account without a bank account?
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <p>To open a demat account, you must have a bank account in your name.<br />
                                            If UPI verification is completed successfully, no proof of bank is needed. However, if bank verification fails, you'll need to provide either a cancelled cheque or a bank statement to link your bank account to Zerodha.</p>
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

export default FAQs