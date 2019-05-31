import React from 'react'
import { Link } from 'gatsby'

import punchInIcon from '../../images/punchin-ios-icon.png'
import punchInUI from '../../images/punchin-ios-ui.png'
import appStore from '../../images/Download_on_the_App_Store_Badge_US-UK_135x40.svg'
import searchIcon from '../../images/search.svg'
import sessionsLogIcon from '../../images/sessions_log.svg'
import alertsIcon from '../../images/alerts.svg'
import syncIcon from '../../images/sync.svg'

const IosSection = props => (
  <div id="ios-section" style={{ display: props.displayProp }}>
    <div className="section hiw">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 text-section">
            <h3>Use it on all your devices</h3>
            <h5>
              Easily keep your database in sync across your devices using
              dropbox. It’s a bit like magic. (Coming in version 1.0)
            </h5>
          </div>
          <div className="col-12 col-md-6 text-section">
            <h3 className="control">Simple and efficient</h3>
            <h5>
              Combine projects with clients, easily add or remove time, ability
              to change start date, archive, lock or delete your projects.
            </h5>
          </div>
        </div>
      </div>
      <div className="row hiw-image ios-section">
        <div className="col-12">
          <img src={punchInUI} alt="Punch In UI" />
        </div>
      </div>
    </div>

    <div className="section features">
      <div className="container">
        <h3>Punch In features for iOS</h3>
        <div className="row">
          <div className="col-6 col-md-3 feature">
            <div className="icon-wrapper">
              <img src={searchIcon} alt=" " />
            </div>
            <h4>Search</h4>
            <h6>
              Can’t find what you are looking for? Search your projects, clients
              or archive. (Coming in version 1.0)
            </h6>
          </div>
          <div className="col-6 col-md-3 feature">
            <div className="icon-wrapper">
              <img src={sessionsLogIcon} alt=" " />
            </div>
            <h4>Sessions Log</h4>
            <h6>
              Keep track of your projects in detail by using the session log to
              display their history.
            </h6>
          </div>
          <div className="col-6 col-md-3 feature">
            <div className="icon-wrapper">
              <img src={alertsIcon} alt=" " />
            </div>
            <h4>Alerts</h4>
            <h6>
              Left the clock ticking? Punch In will notify you if you wish.
            </h6>
          </div>
          <div className="col-6 col-md-3 feature">
            <div className="icon-wrapper">
              <img src={syncIcon} alt=" " />
            </div>
            <h4>Sync</h4>
            <h6>
              Easily keep your database in sync across your devices. It’s a bit
              like magic. (Coming in version 1.0)
            </h6>
          </div>
        </div>
      </div>
    </div>
    <div className="section customers">
      <div className="container">
        <h3>What our customers have to say</h3>
        <h6>“As simple as it can be, but no more”</h6>
        <p>– Nick Sloan</p>
        <h6>“I’ll continue to sing this app’s praises to friends.”</h6>
        <p>– Bryn Hewko</p>
        <h6>“I really like your app – straight forward and focused.”</h6>
        <p>– Fredrik Arsaeus Nauckhoff</p>
        <h6>“I really like your app! Great price and simple to use.”</h6>
        <p>– Martin Knapp</p>
      </div>
    </div>
    <div className="section apps">
      <div className="container app">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="img-link"
              href="https://appstore.com/punchintimetracker"
            >
              <img src={punchInIcon} alt="Punch In iOS App" />
            </a>
            <h3>Get Punch In for iOS</h3>
            <h6>Time tracking made simple and efficient. Download for free!</h6>
          </div>
        </div>
        <div className="row">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://appstore.com/punchintimetracker"
          >
            <img className="store-link" src={appStore} alt=" " />
          </a>
        </div>
        <div className="row">
          <div className="col-12 release-notes">
            <div className="mt-4">
              <a href="https://blog.wearekidpilot.com/tagged/release-notes-punch-in-for-ios">
                Release notes
              </a>{' '}
              | <Link to="/punchin/help">FAQ</Link>
            </div>
            <p>
              Requires iOS 11 or newer. Compatible with iPhone, iPad and iPod
              touch.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default IosSection
