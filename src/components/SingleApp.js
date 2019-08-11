import React from 'react'
import { Link } from 'gatsby'
// import GatsbyImage from './queryAppImagesFromData'
import punchInIosIcon from '../images/punchin-ios-icon.png'
import punchInMacIcon from '../images/punchin-mac-icon.png'
import ouffIcon from '../images/ouff-icon.png'
import somethingIcon from '../images/something-icon.png'

class SingleApp extends React.Component {
  getImage = () => {
    return 'ouffIcon'
  }
  render() {
    const {
      title,
      image,
      logoName,
      subtitle,
      description,
      linkToPage,
      subtitleSpanText,
    } = this.props.details

    return (
      <div className="app col-12 col-md-6">
        <div className="gatsbyImage-linkWrapper">
          <Link className="img-link" to={linkToPage}>
            {/* <GatsbyImage imgName={image} /> */}
            {logoName === 'punchInIosIcon' && (
              <img src={punchInIosIcon} alt={`${title} logo`} />
            )}
            {logoName === 'punchInMacIcon' && (
              <img src={punchInMacIcon} alt={`${title} logo`} />
            )}
            {logoName === 'ouffIcon' && (
              <img src={ouffIcon} alt={`${title} logo`} />
            )}
            {logoName === 'somethingIcon' && (
              <img src={somethingIcon} alt={`${title} logo`} />
            )}
          </Link>
        </div>
        <h3>{title}</h3>
        <h6>
          <span>{subtitleSpanText}</span>
          {subtitle}
        </h6>
        <h5>{description}</h5>
        <div className="buttons row">
          <div className="button">
            <Link to={linkToPage}>
              <p>Learn More</p>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleApp
