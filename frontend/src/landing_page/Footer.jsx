import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className='bg-dark text-light text-center py-4 mt-5'>
        <div className='container'>
          <p className='mb-0'>© 2023 Zerodha. All rights reserved.</p>
          <p className='mb-0'>Terms of Service | Privacy Policy</p>
          <p className='mb-0'>Follow us on:
            <a href='https://twitter.com/zerodhaonline' className='text-light mx-2'>Twitter</a> |
            <a href='https://www.facebook.com/zerodhaonline' className='text-light mx-2'>Facebook</a> |
            <a href='https://www.instagram.com/zerodhaonline/' className='text-light mx-2'>Instagram</a>
          </p>
        </div>
      </footer>
      <div className='bg-secondary text-center py-2'>
      </div>
    </>
  )
}
