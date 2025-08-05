import React from 'react'

export const fontStyle = {
  fontFamily: 'Arial, sans-serif',
  fontSize: '17px',
  lineHeight: '1.7',
}

const HeadingStyle = {
  fontFamily: 'Arial, sans-serif',
  fontWeight: '500',
  fontSize: '1.5rem',
  lineHeight: '1',
  color: '#424242',
}

export default function Hero() {
  return (
    <>
      <div className='container px-5 py-5'>
        <div className='text-center p-5'>
          <p style={HeadingStyle}>We pioneered the discount broking model in India.</p>
          <p style={HeadingStyle}>Now, we are breaking ground with our technology.</p>
        </div>
        <hr />
        <div className=' p-4 rounded-4 p-5'>
          <div className='row px-5'>
            <div className='col-6 p-5'>
              <p style={fontStyle}>
                We kick-started operations on the 15th of August, 2010 <br /> with the
                goal of breaking all barriers that traders and <br />investors face in
                India in terms of cost, support, and<br /> technology. We named the company Stockify, a<br /> combination of Zero and "Rodha", the Sanskrit word for<br /> barrier.
              </p>
              <p style={fontStyle}>
                Today, our disruptive pricing models and in-house<br /> technology have made us the biggest stock broker in<br /> India.
              </p>
              <p style={fontStyle}>
                Over <span>1.6+ crore</span> clients place billions of orders every year<br />
                through our powerful ecosystem of investment<br /> platforms,
                contributing over 15% of all Indian retail<br /> trading volumes.
              </p>
            </div>
            <div className='col-6 p-5'>
              <p style={fontStyle}>
                In addition, we run a number of popular open online<br /> educational
                and community initiatives to empower retail<br /> traders and
                investors.
              </p>
              <p style={fontStyle}>
                <a href="/" className='text-decoration-none'>Rainmatter</a>, our fintech fund and incubator, has invested<br /> in
                several fintech startups with the goal of growing the<br /> Indian
                capital markets.
              </p>
              <p style={fontStyle}>
                And yet, we are always up to something new every day.<br /> Catch
                up on the latest updates on our&nbsp;
                <a href="/" className='text-decoration-none'>blog</a> or see what<br />
                the media is&nbsp;
                <a href="/" className='text-decoration-none'>saying about us</a> or
                learn more about our<br /> business and product <a href="" className='text-decoration-none'>philosophies</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
