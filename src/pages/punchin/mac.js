// These files (ios.js and mac.js) is named to produce specific links, do not change filename

import React from 'react'
import $ from 'jquery'
import Helmet from 'react-helmet'

import IosSection from '../../components/punchin/IosSection'
import MacSection from '../../components/punchin/MacSection.js'
import ToggleButton from '../../components/punchin/ToggleButton.js'

import macAppStore from '../../images/Download_on_the_Mac_App_Store_Badge_US-UK_165x40.svg'
import appStore from '../../images/Download_on_the_App_Store_Badge_US-UK_135x40.svg'

import ogImage from '../../images/metaImg-punchin.jpg'
import punchInHero from '../../images/punchin-header.png'
import punchInMobileHero from '../../images/punchin-mobile-hero.png'

class SecondPage extends React.Component {
  componentDidMount() {
    setTimeout(function() {
      $('h1.hidden, img.hero-image').removeClass('hidden')
    }, 300)

    setTimeout(function() {
      $(
        'h5.hidden, h2.hidden, h6.hidden, h4.hidden, .apple-link.hidden'
      ).removeClass('hidden')
    }, 500)
  }
  render() {
    return (
      <>
        <Helmet
          title={'Punch In - a simple and efficient worktimer'}
          meta={[
            {
              name: 'description',
              content:
                'Punch In is a simple and efficient worktimer made to help you keep track of your work. Runs smoothly in the background while you focus on what you do best.',
            },
            {
              property: 'og:title',
              content: 'Punch In - a simple and efficient worktimer',
            },
            {
              property: 'og:url',
              content: 'https://wearekidpilot.com/punchin/mac',
            },
            {
              property: 'og:description',
              content:
                'Punch In is a simple and efficient worktimer made to help you keep track of your work. Runs smoothly in the background while you focus on what you do best.',
            },
            {
              property: 'og:image',
              content: `https://wearekidpilot.com${ogImage}`,
            },
            { property: 'og:image:width', content: `1200` },
            { property: 'og:image:height', content: `628` },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div className="punchin">
          <div className="section jumbotron-custom">
            <div className="container">
              <div className="row hero-wrapper">
                <div className="col-12 col-xl-5">
                  <div className="text-wrapper">
                    <h1 className="hidden">Punch In</h1>
                    <h2 className="hidden">
                      A simple and efficient worktimer for Mac, iPhone and iPad.
                    </h2>
                    <h5 className="hidden">
                      Make time tracking less time consuming. Punch In runs
                      smoothly in the background while you focus on what you do
                      best. Less really is more.
                    </h5>
                    <div className="apple-link hidden row">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-none d-md-block col-6"
                        href="https://itunes.apple.com/se/app/punch-in/id519552546?mt=12"
                      >
                        <img
                          className="store-link"
                          src={macAppStore}
                          alt="Mac App Store"
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="col-12 col-md-6"
                        href="https://appstore.com/punchintimetracker"
                      >
                        <img
                          className="store-link"
                          src={appStore}
                          alt="App Store"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-7">
                  <img
                    className="hero-image hidden d-none d-sm-block"
                    src={punchInHero}
                    alt="Punch In Hero"
                  />
                  <img
                    className="hero-image hidden d-sm-none"
                    src={punchInMobileHero}
                    alt="Punch In Hero"
                  />
                </div>
              </div>
            </div>
            <div className="whitespace row" />
          </div>
          <div className="section hiw">
            {/* När knappen i ToggleButton klickas ändras vilken av komponenterna som skall visas m.h.a CSS. */}
            <ToggleButton activeBtn={'mac'} />
            <MacSection displayProp={'block'} />
            <IosSection displayProp={'none'} />
          </div>
        </div>
      </>
    )
  }
}

export default SecondPage
