import React from 'react'
import $ from 'jquery'
import Helmet from 'react-helmet'

import ogImage from '../images/metaImg-ouff.jpg'
import appStore from '../images/Download_on_the_App_Store_Badge_US-UK_135x40.svg'
import googlePlayIcon from '../images/googlePlayIcon.png'
import ouffHero1 from '../images/ouff-hero-1.png'
import ouffHero2 from '../images/ouff-hero-2.png'
import ouffHero3 from '../images/ouff-hero-3.png'
import ouffIcon from '../images/ouff-icon.png'

import Header from '../components/header'
import Layout from '../components/layout'

class SomethingPage extends React.Component {
  state = {
    heroImg: ouffHero1,
  }

  componentDidMount() {
    setTimeout(function() {
      $('h1.hidden, img.hero-image').removeClass('hidden')
    }, 300)

    setTimeout(function() {
      $(
        'h5.hidden, h2.hidden, h6.hidden, h4.hidden, .apple-link.hidden'
      ).removeClass('hidden')
    }, 500)
    // Random hero images: heroImages[randNumber]
    const heroImages = [ouffHero1, ouffHero2, ouffHero3]
    const randNumber = Math.floor(Math.random() * heroImages.length)
    // const heroImage = heroImages[randNumber]
    this.setState({ heroImg: heroImages[randNumber] })
    // console.log(heroImages[randNumber])
  }

  render() {
    return (
      <Layout>
        <Helmet
          title={'Ouff - Daily insults'}
          meta={[
            {
              name: 'description',
              content:
                'Ouff delivers daily insults with genuine affection. It’s all about the timing. Every day, once a week - when is up to you.',
            },
            {
              property: 'og:title',
              content: 'Ouff - Daily insults',
            },
            {
              property: 'og:url',
              content: 'https://wearekidpilot.com/ouff',
            },
            {
              property: 'og:description',
              content:
                'Ouff delivers daily insults with genuine affection. It’s all about the timing. Every day, once a week - when is up to you.',
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
        <div className="ouff">
          <Header />
          <div className="section jumbotron-custom">
            <div className="container">
              <div className="row hero-wrapper">
                <div className="col-12 col-lg-7">
                  <div className="text-wrapper">
                    <h1 className="hidden">Ouff</h1>
                    <h2 className="hidden">Daily insults. That's it.</h2>
                    <div className="apple-link hidden">
                      <h6>
                        <span>Free</span> for your phone or tablet
                      </h6>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://appstore.com/ouff"
                      >
                        <img
                          className="store-link"
                          src={appStore}
                          alt="App Store"
                        />
                      </a>
                      {/* <a
                        className="googlePlay"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="/ouff"
                      >
                        <img
                          className="store-link"
                          src={googlePlayIcon}
                          alt="Google Play"
                        />
                      </a> */}
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <img
                    className="hero-image hidden"
                    src={this.state.heroImg}
                    alt="Ouff Hero"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="section apps">
            <div className="container app">
              <div className="row">
                <div className="col-12 col-lg-6 offset-lg-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="img-link"
                    href="http://appstore.com/ouff"
                  >
                    <img src={ouffIcon} alt="Ouff App" />
                  </a>
                  <h3>Get Ouff</h3>
                  <h6>Daily insults</h6>
                </div>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://appstore.com/ouff"
                >
                  <img className="store-link" src={appStore} alt="App Store" />
                </a>
                {/* <a
                  className="googlePlay"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/ouff"
                >
                  <img
                    className="store-link"
                    src={googlePlayIcon}
                    alt="Google Play"
                  />
                </a> */}
              </div>
              <div className="row">
                <div className="col-12 release-notes release-notes-ouff">
                  <div className="mt-4">
                    <a href="https://blog.wearekidpilot.com/tagged/release-notes-ouff">
                      Release notes
                    </a>
                    <p>
                      Requires Apple iOS 10 and higher, Android OS 5.0 and
                      higher, or Windows 10 v1607 or higher.
                    </p>
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

export default SomethingPage
