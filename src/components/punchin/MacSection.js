import React from 'react'
import { Link } from 'gatsby'

import sessionsLogIcon from '../../images/sessions_log.svg'
import alertsIcon from '../../images/alerts.svg'
import backupIcon from '../../images/backup.svg'
import menubarIcon from '../../images/menubar.svg'
import syncIcon from '../../images/sync.svg'
import multiselectIcon from '../../images/mulitselect.svg'
import searchIcon from '../../images/search.svg'
import exportIcon from '../../images/export.svg'
import macUI from '../../images/multiselect.png'
import macAppStore from '../../images/Download_on_the_Mac_App_Store_Badge_US-UK_165x40.svg'
import punchInMacIcon from '../../images/punchin-mac-icon.png'

const MacSection = props => (
  // Using inline style to quickly change with toggle button
  <div id="mac-section" style={{ display: props.displayProp }}>
    <div className="section hiw">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 text-section">
            <h3>Use it on all your devices</h3>
            <h5>
              Easily keep your database in sync across your devices using
              dropbox. It’s a bit like magic.
            </h5>
          </div>
          <div className="col-12 col-md-6 text-section">
            <h3 className="control">Be in control</h3>
            <h5>
              Select multiple projects for a swift overview of your combined
              hours and earnings. Use the session log to display your projects
              history. Add notes to each work session.
            </h5>
          </div>
        </div>
      </div>
      <div className="row hiw-image">
        <div className="col-12">
          <img src={macUI} alt="Mac UI" />
        </div>
      </div>
    </div>
    <div className="section features">
      <div className="container">
        <h3>Punch In features for Mac</h3>
        <div className="row">
          <div className="col-6 col-md-3 feature">
            <div className="icon-wrapper">
              <img src={searchIcon} alt=" " />
            </div>
            <h4>Search</h4>
            <h6>
              Can’t find what you are looking for? Search your projects, clients
              or archive.
            </h6>
          </div>
          <div className="col-6 col-md-3 feature">
            <div className="icon-wrapper">
              <img src={exportIcon} alt=" " />
            </div>
            <h4>Export</h4>
            <h6>
              Export your projects’ data to Excel, Numbers or similar software
              to create invoices.
            </h6>
          </div>
          <div className="col-6 col-md-3 feature">
            <div className="icon-wrapper">
              <img src={menubarIcon} alt=" " />
            </div>
            <h4>Menubar</h4>
            <h6>
              Menubar icon for easy access to start/stop and a glance at your
              projects.
            </h6>
          </div>
          <div className="col-6 col-md-3 feature">
            <div className="icon-wrapper">
              <img src={syncIcon} alt=" " />
            </div>
            <h4>Sync</h4>
            <h6>
              Easily keep your database in sync across your Macs. It’s a bit
              like magic.
            </h6>
          </div>
          <div className="col-6 col-md-3 feature">
            <div className="icon-wrapper">
              <img src={multiselectIcon} alt=" " />
            </div>
            <h4>Multiselect</h4>
            <h6>
              Select multiple projects for a swift overview of your combined
              hours and earnings.
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
              Left the clock ticking? Punch In will notify you once you wake up
              your Mac.
            </h6>
          </div>
          <div className="col-6 col-md-3 feature">
            <div className="icon-wrapper">
              <img src={backupIcon} alt=" " />
            </div>
            <h4>Backup</h4>
            <h6>
              Backup all your data effortlessly; Restore anytime in a breeze.
            </h6>
          </div>
        </div>
      </div>
    </div>
    <div className="section customers">
      <div className="container">
        <h3>What our customers have to say</h3>

        <h6>“I’ll continue to sing this app’s praises to friends.”</h6>
        <p>– Bryn Hewko</p>
        <h6>“I really like your app – straight forward and focused.”</h6>
        <p>– Fredrik Arsaeus Nauckhoff</p>
        <h6>“I really like your app! Great price and simple to use.”</h6>
        <p>– Martin Knapp</p>
        <h6>
          “Because of the clients I work with I don't need invoicing software. I
          only need something that can track time and keep the projects in
          order. Punch In does this and does it very well. It is streamlined and
          doesn't try to be more than what it is… and that is useful.”
        </h6>
        <p>– Tiffany Wardle</p>
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
              href="https://itunes.apple.com/se/app/punch-in/id519552546?mt=12"
            >
              <img src={punchInMacIcon} alt="Punch In Mac App" />
            </a>
            <h3>Get Punch In for Mac</h3>
            <h6>Time tracking made simple and efficient.</h6>
          </div>
        </div>
        <div className="row">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://itunes.apple.com/se/app/punch-in/id519552546?mt=12"
          >
            <img className="store-link" src={macAppStore} alt=" " />
          </a>
        </div>
        <div className="row">
          <div className="col-12 release-notes">
            <div className="mt-4">
              <a href="https://blog.wearekidpilot.com/tagged/release-notes-punch-in-for-mac">
                Release notes
              </a>{' '}
              | <Link to="/punchin/help">FAQ</Link>
            </div>
            <p>
              Requires Mac OS X 10.10 or newer. Compatible with High Sierra.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default MacSection
