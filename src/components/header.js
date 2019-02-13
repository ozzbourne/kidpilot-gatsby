import React from 'react'
import { Link } from '@reach/router'
import kidpilotLogo from '../images/logohead@2x.png'
import punchinMacIcon from '../images/punchin-mac-icon-menu.png'
import punchiniOSIcon from '../images/punchin-ios-icon-menu.png'
import somethingIcon from '../images/something-icon-menu.png'
import expandHamburger from './customJS/expandHamburger.js'
import arrow from '../images/menu-arrow.svg'

class Header extends React.Component {
  state = {
    x: 0,
    y: 0,
    z: "unscrolled"
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  // handleScroll = ev => {
  //   this.setState({
  //     x: window.scrollX,
  //     y: window.scrollY
  //   });
  //   if (window.scrollY > 30){
  //     this.setState({z: "scrolled"});
  //   }
  //   else {
  //     this.setState({z: "unscrolled"});
  //   }
  // };

  render (){
    return (
      <nav className={`navbar ${this.state.z}`}>
        <div className="brand">
          <Link className="navbar-brand" to="/">
            <img className="kidpilot" src={kidpilotLogo} alt="Kidpilot Logo" />
          </Link>
        </div>
        <div className="hamburger d-md-none" onClick={() => expandHamburger()}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="navigation">
          <ul className="nav flex-row">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Mac Apps<img className="menu-arrow" src={arrow} alt="Toggler Arrow"/></a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/punchin/mac"><img className="menu-icon" src={punchinMacIcon} alt="Punch In for Mac"/>Punch In</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">iOS Apps<img className="menu-arrow" src={arrow} alt="Toggler Arrow"/></a>
              <ul className="dropdown-menu"> 
                <li>
                  <Link className="dropdown-item" to="/something"><img className="menu-icon" src={somethingIcon} alt="Something for iOS"/>Something</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/punchin/ios"><img className="menu-icon" src={punchiniOSIcon} alt="Punch In for iOS"/>Punch In</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/company">Company</Link>
            </li>
            <li className="nav-item">
              <a href="https://blog.wearekidpilot.com">Blog</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default Header
