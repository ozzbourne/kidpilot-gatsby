import React from 'react'
import $ from 'jquery'
import showMac from '../../components/customJS/showMac.js'
import showiOS from '../../components/customJS/showiOS.js'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import macAppStore from '../../images/Download_on_the_Mac_App_Store_Badge_US-UK_165x40.svg'
import appStore from '../../images/Download_on_the_App_Store_Badge_US-UK_135x40.svg'

import punchInHero from '../../images/punchin-header.png'
import punchInMobileHero from '../../images/punchin-mobile-hero.png'
import punchInMacIcon from '../../images/punchin-mac-icon.png'
import punchInIcon from '../../images/punchin-ios-icon.png'
import punchInUI from '../../images/punchin-ios-ui.png'
import macUI from '../../images/multiselect.png'
import searchIcon from '../../images/search.svg'
import exportIcon from '../../images/export.svg'
import menubarIcon from '../../images/menubar.svg'
import syncIcon from '../../images/sync.svg'
import multiselectIcon from '../../images/mulitselect.svg'
import sessionsLogIcon from '../../images/sessions_log.svg'
import alertsIcon from '../../images/alerts.svg'
import backupIcon from '../../images/backup.svg'

import Header from '../../components/header'
import Layout from '../../components/layout'


class SecondPage extends React.Component {
  componentDidMount(){
    setTimeout(function(){
      $('h1.hidden, img.hero-image').removeClass('hidden');
    }, 300);

    setTimeout(function(){
      $('h5.hidden, h2.hidden, h6.hidden, h4.hidden, .apple-link.hidden').removeClass('hidden');
    }, 500);
  }

  
  render (){
    return (
      <Layout>
        <Helmet
          title={"Punch In - a simple and efficient worktimer"}
          meta={[
            { name: 'description', 
             content: 'Punch In is a simple and efficient worktimer made to help you keep track of your work. Runs smoothly in the background while you focus on what you do best.' },
            { property: 'og:title', 
             content: 'Punch In - a simple and efficient worktimer' },
            { property: 'og:url', 
             content: 'https://wearekidpilot.com/punchin/mac' },
            { property: 'og:description', 
             content: 'Punch In is a simple and efficient worktimer made to help you keep track of your work. Runs smoothly in the background while you focus on what you do best.' },
            { property: 'og:image', content: `https://wearekidpilot.com${punchInMacIcon}` }
          ]}
        >
          <html lang="en" />

        </Helmet>
        <div className="punchin">
          <Header />
          <div className="section jumbotron-custom">
            <div className="container">
              <div className="row hero-wrapper">
                <div className="col-12 col-xl-5">
                  <div className="text-wrapper">
                    <h1 className="hidden">Punch In</h1>
                    <h2 className="hidden">A simple and efficient worktimer for Mac, iPhone and iPad.</h2>
                    <h5 className="hidden">Make time tracking less time consuming. Punch In runs smoothly in the background while you focus on what you do best. Less really is more.</h5>
                    <div className="apple-link hidden row">
                      <a target="_blank" className="d-none d-md-block col-6" href="https://appstore.com/mac/punchin">
                        <img className="store-link" src={macAppStore} alt="Mac App Store"/>
                      </a>
                      <a target="_blank" className="col-12 col-md-6" href="https://appstore.com/punchintimetracker">
                        <img className="store-link" src={appStore} alt="App Store"/>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-7">
                  <img className="hero-image hidden d-none d-sm-block" src={punchInHero} alt="Punch In Hero" />
                  <img className="hero-image hidden d-sm-none" src={punchInMobileHero} alt="Punch In Hero" />

                </div>
              </div>
            </div>
            <div className="whitespace row"></div>
          </div>
          <div className="section hiw">
            <div className="container">
              <div className="row btn-row">
                <div className="col-12">
                  <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    <label onClick={() => showMac()} className="btn btn-primary btn-lg active" id="mac">
                      <input type="radio" name="options" id="option1" autoComplete="off" />
                    for Mac
                    </label>
                    <label onClick={() => showiOS()} className="btn btn-primary btn-lg" id="ios">
                      <input type="radio" name="options" id="option2" autoComplete="off" /> for iOS
                    </label>
                      
                  </div>
                </div>
              </div>  
            </div>
            <div id="mac-section">
              <div className="section hiw">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-6 text-section">
                      <h3>
                        Use it on all your devices
                      </h3>
                      <h5>
                        Easily keep your database in sync across your devices using dropbox. It’s a bit like magic.
                      </h5>
                    </div>
                    <div className="col-12 col-md-6 text-section">
                      <h3 className="control">
                        Be in control
                      </h3>
                      <h5>
                       Select multiple projects for a swift overview of your combined hours and earnings. Use the session log to display your projects history. Add notes to each work session.
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="row hiw-image">
                  <div className="col-12">
                    <img src={macUI} alt="Mac UI"/>
                  </div>
                </div>
              </div>
              <div className="section features">
                <div className="container">
                  <h3>
                    Punch In features for Mac
                  </h3>
                  <div className="row">
                    <div className="col-6 col-md-3 feature">
                      <div className="icon-wrapper">
                        <img src={searchIcon} alt=" " />
                      </div>
                      <h4>Search</h4>
                      <h6>
                        Can’t find what you are looking for? Search your projects, clients or archive.
                      </h6>
                    </div>
                    <div className="col-6 col-md-3 feature">
                        <div className="icon-wrapper">
                          <img src={exportIcon} alt=" " />
                        </div>
                        <h4>Export</h4>
                        <h6>
                          Export your projects’ data to Excel, Numbers or similar software to create invoices.
                        </h6>
                      </div>
                    <div className="col-6 col-md-3 feature">
                        <div className="icon-wrapper">
                          <img src={menubarIcon} alt=" " />
                        </div>
                        <h4>Menubar</h4>
                        <h6>
                          Menubar icon for easy access to start/stop and a glance at your projects.
                        </h6>
                      </div>
                    <div className="col-6 col-md-3 feature">
                        <div className="icon-wrapper">
                          <img src={syncIcon} alt=" " />
                        </div>
                        <h4>Sync</h4>
                        <h6>
                          Easily keep your database in sync across your Macs. It’s a bit like magic.
                        </h6>
                      </div>
                    <div className="col-6 col-md-3 feature">
                        <div className="icon-wrapper">
                          <img src={multiselectIcon} alt=" " />
                        </div>
                        <h4>Multiselect</h4>
                        <h6>
                          Select multiple projects for a swift overview of your combined hours and earnings.
                        </h6>
                      </div>
                    <div className="col-6 col-md-3 feature">
                        <div className="icon-wrapper">
                          <img src={sessionsLogIcon} alt=" " />
                        </div>
                        <h4>Sessions Log</h4>
                        <h6>
                          Keep track of your projects in detail by using the session log to display their history.
                        </h6>
                      </div>
                    <div className="col-6 col-md-3 feature">
                        <div className="icon-wrapper">
                          <img src={alertsIcon} alt=" " />
                        </div>
                        <h4>Alerts</h4>
                        <h6>
                          Left the clock ticking? Punch In will notify you once you wake up your Mac.
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
                  <h3>
                    What our customers have to say
                  </h3>

                  <h6>
                    “I’ll continue to sing this app’s praises to friends.”
                  </h6>
                  <p>
                    – Bryn Hewko
                  </p>
                  <h6>
                    “I really like your app – straight forward and focused.”
                  </h6>
                  <p>
                    – Fredrik Arsaeus Nauckhoff
                  </p>
                  <h6>
                    “I really like your app! Great price and simple to use.”
                  </h6>
                  <p>
                    – Martin Knapp
                  </p>
                  <h6>
                    “Because of the clients I work with I don't need invoicing software. I only need something that can track time and keep the projects in order. Punch In does this and does it very well. It is streamlined and doesn't try to be more than what it is… and that is useful.”
                  </h6>
                  <p>
                    – Tiffany Wardle
                  </p>

                </div>
              </div>
              <div className="section apps">
                <div className="container app">
                  <div className="row">
                    <div className="col-12 col-lg-8 offset-lg-2">
                      <a target="_blank" className="img-link" href="https://appstore.com/mac/punchin">
                        <img src={punchInMacIcon} alt="Punch In Mac App" />
                      </a>
                      <h3>
                        Get Punch In for Mac
                      </h3>
                      <h6>
                        Time tracking made simple and efficient.
                      </h6>
                    </div>
                  </div>  
                  <div className="row">
                    <a target="_blank" href="https://appstore.com/mac/punchin">
                      <img className="store-link" src={macAppStore} alt="Mac App Store"/>
                    </a>
                  </div>
                  <div className="row">
                    <div className="col-12 release-notes">
                      <div className="mt-4">
                        <a href="https://blog.wearekidpilot.com/tagged/release-notes-punch-in-for-mac">Release notes</a> | <Link to="/punchin/help">FAQ</Link>
                      </div>
                      <p>Requires Mac OS X 10.10 or newer. Compatible with High Sierra.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            
          <div id="ios-section" style={{display: 'none'}}>
            <div className="section hiw">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-6 text-section">
                    <h3>
                      Use it on all your devices
                    </h3>
                    <h5>
                      Easily keep your database in sync across your devices using dropbox. It’s a bit like magic. (Coming in version 1.0)
                    </h5>
                  </div>
                  <div className="col-12 col-md-6 text-section">
                    <h3 className="control">
                      Simple and efficient
                    </h3>
                    <h5>
                     Combine projects with clients, easily add or remove time, ability to change start date, archive, lock or delete your projects.
                    </h5>
                  </div>
                </div>
              </div>
              <div className="row hiw-image ios-section">
                <div className="col-12">
                  <img src={punchInUI} alt="Punch In UI"/>
                </div>
              </div>
            </div>

            <div className="section features">
              <div className="container">
                <h3>
                  Punch In features for iOS
                </h3>
                <div className="row">
                  <div className="col-6 col-md-3 feature">
                    <div className="icon-wrapper">
                      <img src={searchIcon} alt=" " />
                    </div>
                    <h4>Search</h4>
                    <h6>
                      Can’t find what you are looking for? Search your projects, clients or archive. (Coming in version 1.0)
                    </h6>
                  </div>
                  <div className="col-6 col-md-3 feature">
                    <div className="icon-wrapper">
                      <img src={sessionsLogIcon} alt=" " />
                    </div>
                    <h4>Sessions Log</h4>
                    <h6>
                      Keep track of your projects in detail by using the session log to display their history.
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
                      Easily keep your database in sync across your devices. It’s a bit like magic. (Coming in version 1.0)
                    </h6>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="section customers">
              <div className="container">
                <h3>
                  What our customers have to say
                </h3>
                <h6>
                  “I’ll continue to sing this app’s praises to friends.”
                </h6>
                <p>
                  – Bryn Hewko
                </p>
                <h6>
                  “I really like your app – straight forward and focused.”
                </h6>
                <p>
                  – Fredrik Arsaeus Nauckhoff
                </p>
                <h6>
                  “I really like your app! Great price and simple to use.”
                </h6>
                <p>
                  – Martin Knapp
                </p>
                <h6>
                  “Because of the clients I work with I don't need invoicing software. I only need something that can track time and keep the projects in order. Punch In does this and does it very well. It is streamlined and doesn't try to be more than what it is… and that is useful.”
                </h6>
                <p>
                  – Tiffany Wardle
                </p>
              </div>
            </div>
            <div className="section apps">
              <div className="container app">
                <div className="row">
                  <div className="col-12 col-lg-8 offset-lg-2">
                    <a target="_blank" className="img-link" href="https://appstore.com/punchintimetracker">
                      <img src={punchInIcon} alt="Punch In iOS App" />
                    </a>
                    <h3>
                      Get Punch In for iOS
                    </h3>
                    <h6>
                      Time tracking made simple and efficient. Download for free!
                    </h6>
                  </div>
                </div>  
                <div className="row">
                  <a target="_blank" href="https://appstore.com/punchintimetracker">
                    <img className="store-link" src={appStore} alt="App Store"/>
                  </a>
                </div>
                <div className="row">
                  <div className="col-12 release-notes">
                    <div className="mt-4">
                      <a href="https://blog.wearekidpilot.com/tagged/release-notes-punch-in-for-ios">Release notes</a> | <Link to="/punchin/help">FAQ</Link>
                    </div>
                    <p>Requires iOS 11 or newer. Compatible with iPhone, iPad and iPod touch.</p>
                  </div>
                </div>
              </div>
            </div>
          
          </div>


          </div>
        </div>
        
      </Layout>
    )
  }
}


export default SecondPage
