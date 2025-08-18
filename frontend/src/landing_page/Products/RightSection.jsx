import { ParaStyle } from "./LeftSection"
export default function RightSection({ imageUrl, productName, description, learnMoreLink, linkName, arrowIcon }) {
  return (
    <>
      <div className="container py-4 px-5 mt-5">
        <div className="row">
          <div className='col-4 mt-5 p-5'>
            <h3 className="mt-5">{productName}</h3>
            <p className='fs-6 mt-3 lh-lg' style={ParaStyle}>{description}</p>
            <a href={learnMoreLink} className='text-decoration-none fw-semibold'>{linkName} {arrowIcon}</a>
          </div>
          <div className="col-8 text-end">
            <img src={imageUrl} alt="Zerodha Products" className="w-75 h-100" />
          </div>
        </div>
      </div>
    </>
  )
}
