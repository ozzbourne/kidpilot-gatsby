import React from 'react'
import { Link } from 'gatsby'
import GatsbyImage from './queryAppImagesFromData'

class SingleApp extends React.Component {
  render() {
    const {
      title,
      image,
      subtitle,
      description,
      linkToPage,
      subtitleSpanText,
    } = this.props.details
    return (
      <div className="app col-12 col-md-6">
        <div className="gatsbyImage-linkWrapper">
          <Link className="img-link" to={linkToPage}>
            <GatsbyImage imgName={image} />
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
