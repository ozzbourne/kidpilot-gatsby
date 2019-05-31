import React from 'react'
import { Link } from 'gatsby'
import kidpilotLogo from '../images/kidpilot-logo-footer.png'

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-1" />
            <div className="col-6 col-md-2 offset-md-1 offset-lg-0 footer-section">
              <h5>Mac Apps</h5>
              <Link className="footer-nav-item" to="/punchin/mac">
                Punch In
              </Link>
            </div>
            <div className="col-6 col-md-2 footer-section">
              <h5>iOS Apps</h5>
              <Link className="footer-nav-item" to="/punchin/ios">
                Punch In
              </Link>
              <br />
              <Link className="footer-nav-item" to="/something">
                Something
              </Link>
              <br />
              <Link className="footer-nav-item" to="/ouff">
                Ouff
              </Link>
              {/* <br />
          <a className="footer-nav-item" href="https://spinndiscgolf.com">
            Spinn Disc Golf
          </a> */}
            </div>
            <div className="col-6 col-md-2 footer-section">
              <h5>Follow</h5>
              <a
                className="footer-nav-item"
                href="https://twitter.com/wearekidpilot"
              >
                Twitter
              </a>
              <br />
              <a
                className="footer-nav-item"
                href="https://www.facebook.com/kidpilot/"
              >
                Facebook
              </a>
            </div>
            <div className="col-6 col-md-2 footer-section">
              <h5>Company</h5>
              <Link className="footer-nav-item" to="/company">
                About
              </Link>
              <br />
              <a
                className="footer-nav-item"
                href="mailto:tower@wearekidpilot.com"
              >
                Contact us
              </a>
            </div>
            <div className="col-12 col-md-2 footer-section">
              <h5>News</h5>
              <Link className="footer-nav-item" to="/blog">
                Blog
              </Link>
            </div>
            <div className="col-lg-1" />
          </div>
          <div className="row">
            <div className="col-12">
              <img src={kidpilotLogo} alt="Kidpilot" />
            </div>
            <div className="col-12">
              <p className="footer-bottom-text">&copy; 2019 Kidpilot</p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
