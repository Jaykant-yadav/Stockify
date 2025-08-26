import React from 'react'

function Currency() {
  return (
    <>
      <table className="table table-bordered">
        <thead className='text-center'>
          <tr>
            <th></th>
            <th>Currency futures</th>
            <th>Currency options</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          <tr>
            <td>Brokerage</td>
            <td>0.03% or ₹ 20/executed order whichever is lower</td>
            <td>₹ 20/executed order</td>
          </tr>
          <tr>
            <td>STT/CTT</td>
            <td>No STT	</td>
            <td>No STT	</td>
          </tr>
          <tr>
            <td>Transaction charges</td>
            <td>
              <ul>
                <li style={{listStyle: "none"}}>NSE: 0.00035%</li>
                <li style={{listStyle: "none"}}>BSE: 0.00045%</li>
              </ul>
            </td>
            <td>
              <ul>
                <li style={{listStyle: "none"}}>NSE: 0.0311%</li>
                <li style={{listStyle: "none"}}>BSE: 0.001%</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>GST</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
          </tr>
          <tr>
            <td>SEBI charges</td>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
          </tr>
          <tr>
            <td>Stamp charges</td>
            <td>0.0001% or ₹10 / crore on buy side</td>
            <td>0.0001% or ₹10 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Currency