
export const ParaStyle = {
  fontSize: '3rem',
  fontWeight: '400',
  color: '#333',
};
export default function LeftSection({ imageUrl, productName, description, tryDemoLink, learnMoreLink, googlePlayLink, appStoreLink, linkName, linkName2, arrowIcon }) {
  return (
    <>
      <div className="container p-5">
        <div className="row ">
          <div className="col-8 ms-auto me-auto text-center">
            <img src={imageUrl} alt="Zerodha Products" />
          </div>
          <div className='col-4 text-start mt-5'>
            <h3>{productName}</h3>
            <p className='fs-6 mt-4 lh-lg' style={ParaStyle}>{description}</p>
            <div className='row mt-3'>
              <div className='col-6'>
                <a href={tryDemoLink} className='text-decoration-none fw-semibold'>{linkName} {arrowIcon}</a>
              </div>
              <div className='col-6'>
                <a href={learnMoreLink} className='text-decoration-none fw-semibold'>{linkName2} {linkName2 && arrowIcon}</a>
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-6'>
                <a href={googlePlayLink} className='text-decoration-none'>
                  <img src='Media/googlePlayBadge.svg' />
                </a>
              </div>
              <div className='col-6'>
                <a href={appStoreLink} className='text-decoration-none'>
                  <img src='Media/appstoreBadge.svg' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
