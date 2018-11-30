import React from 'react'
import { Link } from 'gatsby'
import kidpilotLogo from '../images/kidpilot-logo-footer.png'


const Footer = () => (
<footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col-lg-1"></div>
      <div className="col-6 col-md-2 offset-md-1 offset-lg-0 footer-section">
        <h5>Mac Apps</h5>
        <Link to="/punchin/mac">Punch In</Link>
      </div>
      <div className="col-6 col-md-2 footer-section">
        <h5>iOS Apps</h5>
        <Link to="/punchin/ios">Punch In</Link><br/>
        <Link to="/something">Something</Link><br/>
        <a href="https://spinndiscgolf.com">Tjing</a>
      </div>
      <div className="col-6 col-md-2 footer-section">
        <h5>Follow</h5>
        <a href="https://twitter.com/wearekidpilot">Twitter</a><br/>
        <a href="https://www.facebook.com/kidpilot/">Facebook</a>
      </div>
      <div className="col-6 col-md-2 footer-section">
        <h5>Company</h5>
        <Link to="/company">About</Link><br/>
        <a href="mailto:tower@wearekidpilot.com">Contact us</a>
      </div>
      <div className="col-12 col-md-2 footer-section">
        <h5>News</h5>
        <a href="https://blog.wearekidpilot.com">Blog</a>
      </div>
      <div className="col-lg-1"></div>
    </div>
    <div className="row">
      <div className="col-12">
        <img src={kidpilotLogo} alt="Kidpilot" />
      </div>
      <div className="col-12">
        <p className="footer-bottom-text">&copy; 2018 Kidpilot</p>
      </div>
    </div>
  </div>
</footer>
)

export default Footer
