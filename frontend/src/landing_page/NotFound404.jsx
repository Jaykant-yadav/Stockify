import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound404() {
    return (
        <>
            <div className='container px-5 py-5 '>
                <div className='shadow py-5 my-5 rounded-4'>
                    <h3 className='text-center mt-3'>404 Not Found</h3>
                    <p className='text-center mt-3 text-muted'>Sorry, the page you are looking for does not exist.</p>
                    <div className='text-center mt-4'>
                        <Link to="/" className='btn btn-primary fw-semibold fs-5 p-2 text-light' style={{ width: "18%" }}>Go to Home</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
