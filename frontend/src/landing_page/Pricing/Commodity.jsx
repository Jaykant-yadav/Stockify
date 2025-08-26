import React from 'react'

function Commodity() {
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
                        <td>0.01% on sell side (Non-Agri)	</td>
                        <td>0.05% on sell side</td>
                    </tr>
                    <tr>
                        <td>Transaction charges</td>
                        <td>
                            <ul>
                                <li style={{listStyle: "none"}}>NSE: 0.0021%</li>
                                <li style={{listStyle: "none"}}>BSE: 0.001%</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li style={{listStyle: "none"}}>NSE: 0.0418%</li>
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
                        <td>
                            <ul>
                                <li style={{listStyle: "none"}}>Agri: ₹1 / crore</li>
                                <li style={{listStyle: "none"}}>Non-agri: ₹10 / crore</li>
                            </ul>
                        </td>
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

export default Commodity