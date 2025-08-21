import React from 'react'

function Currency() {
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th></th>
            <th>Equity delivery</th>
            <th>Equity intraday</th>
            <th>F&O - Futures</th>
            <th>F&O - Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Brokerage</td>
            <td>Zero Brokerage</td>
            <td>0.03% or Rs. 20/executed order whichever is lower</td>
            <td>0.03% or Rs. 20/executed order whichever is lower</td>
            <td>Flat Rs. 20 per executed order</td>
          </tr>
          <tr>
            <td>STT/CTT</td>
            <td>0.1% on buy & sell</td>
            <td>0.025% on sell side</td>
            <td>0.02% on sell side</td>
            <td>
              <ul>
                <li>0.125% on exercised options</li>
                <li>0.1% on sell side (premium)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Transaction charges</td>
            <td>
              <ul>
                <li>NSE: 0.00297%</li>
                <li>BSE: 0.00375%</li>
              </ul>
            </td>
            <td>Zero Brokerage</td>
            <td>0.03% or Rs. 20/executed order whichever is lower</td>
            <td>Flat Rs. 20 per executed order</td>
          </tr>
          <tr>
            <td>GST</td>
            <td>Zero Brokerage</td>
            <td>0.03% or Rs. 20/executed order whichever is lower</td>
            <td>0.03% or Rs. 20/executed order whichever is lower</td>
            <td>Flat Rs. 20 per executed order</td>
          </tr>
          <tr>
            <td>SEBI charges</td>
            <td>Zero Brokerage</td>
            <td>0.03% or Rs. 20/executed order whichever is lower</td>
            <td>0.03% or Rs. 20/executed order whichever is lower</td>
            <td>Flat Rs. 20 per executed order</td>
          </tr>
          <tr>
            <td>Stamp charges</td>
            <td>Zero Brokerage</td>
            <td>0.03% or Rs. 20/executed order whichever is lower</td>
            <td>0.03% or Rs. 20/executed order whichever is lower</td>
            <td>Flat Rs. 20 per executed order</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Currency