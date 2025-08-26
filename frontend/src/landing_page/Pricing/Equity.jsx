import React from 'react'

export default function Equity() {
  return (
    <>
    <div className='container px-5'>
      <table className="table table-bordered">
        <thead className='text-center'>
          <tr>
            <th></th>
            <th>Equity delivery</th>
            <th>Equity intraday</th>
            <th>F&O - Futures</th>
            <th>F&O - Options</th>
          </tr>
        </thead>
        <tbody className='text-center'>
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
                <li style={{listStyle: "none"}}>0.125% on exercised options</li>
                <li style={{listStyle: "none"}}>0.1% on sell side (premium)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Transaction charges</td>
            <td>
              <ul>
                <li style={{listStyle: "none"}}>NSE: 0.00297%</li>
                <li style={{listStyle: "none"}}>BSE: 0.00375%</li>
              </ul>
            </td>
            <td>
              <ul>
                <li style={{listStyle: "none"}}>NSE: 0.00297%</li>
                <li style={{listStyle: "none"}}>BSE: 0.00375%</li>
              </ul>
            </td>
            <td>
              <ul>
                <li style={{listStyle: "none"}}>NSE: 0.00173%</li>
                <li style={{listStyle: "none"}}>BSE: 0</li>
              </ul>
            </td>
            <td>
              <ul>
                <li style={{listStyle: "none"}}>NSE: 0.03503% (on premium)</li>
                <li style={{listStyle: "none"}}>BSE: 0.0325% (on premium)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>GST</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
          </tr>
          <tr>
            <td>SEBI charges</td>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
          </tr>
          <tr>
            <td>Stamp charges</td>
            <td>0.015% or ₹1500 / crore on buy side</td>
            <td>0.003% or ₹300 / crore on buy side</td>
            <td>0.002% or ₹200 / crore on buy side</td>
            <td>0.003% or ₹300 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
      </div>
    </>
  )
}
