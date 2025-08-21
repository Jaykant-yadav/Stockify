
export default function Hero() {
  return (
    <>
      <div className="container px-4 py-5 mt-5 mx-auto text-center">
        <h3>Charges</h3>
        <div>
          <p className="fs-5 text-muted">List of all charges and taxes</p>
        </div>

        <div className="row mt-5 p-5">
          <div className="col-md-4">
            <img src="Media\pricingEquity.svg" className="p-5"/>
            <h3>Free equity delivery</h3>
            <p className="text-muted mt-3">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
          </div>
          <div className="col-md-4">
            <img src="Media\intradayTrades.svg" className="p-5"/>
            <h3>Intraday and F&O trades</h3>
            <p className="text-muted mt-3">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
          </div>
          <div className="col-md-4">
            <img src="Media\pricingMF.svg" className="p-5"/>
            <h3>Free direct MF</h3>
            <p className="text-muted mt-3">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
          </div>
        </div>
      </div>
    </>
  )
}
