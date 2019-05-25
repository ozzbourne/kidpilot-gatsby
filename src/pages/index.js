import React from 'react'
import { Link } from 'gatsby'
import $ from 'jquery'
import ogImage from '../images/metaImg-index.jpg'
import punchinHeroImg from '../images/punchin-hero.png'
import ouffHeroImg from '../images/ouff-hero-index.png'
import somethingIcon from '../images/something-icon.png'
import punchInMacIcon from '../images/punchin-mac-icon.png'
import punchInIosIcon from '../images/punchin-ios-icon.png'
import ouffIcon from '../images/ouff-icon.png'
import tjingScorecard from '../images/tjing-scorecard.png'
import Header from '../components/header'
import Helmet from 'react-helmet'
import allAppsFromFile from '../allApps'
import SingleApp from '../components/SingleApp'

//If different layouts is used, replace "Layout" below and wrap page content with it
import Layout from '../components/layout'

class IndexPage extends React.Component {
  state = {
    allApps: {},
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

    this.setState({ allApps: allAppsFromFile })
  }
  render() {
    return (
      <Layout>
        <Helmet
          title={'Kidpilot - We make apps you love to use'}
          meta={[
            {
              name: 'description',
              content:
                'We create tools for mac, web and mobile that help you focus on what you do best and generally make your life easier.',
            },
            {
              property: 'og:title',
              content: 'Kidpilot - We make apps you love to use',
            },
            { property: 'og:url', content: 'https://wearekidpilot.com/' },
            {
              property: 'og:description',
              content:
                'We create tools for mac, web and mobile that help you focus on what you do best and generally make your life easier.',
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
        <div className="index">
          <Header />
          <div className="section jumbotron-custom">
            <div className="hero-bottom">
              <div className="hero-wrapper">
                <Link className="img-link" to="/ouff">
                  <img
                    className="hero-image hidden"
                    src={ouffHeroImg}
                    alt="Punch In Hero"
                  />
                </Link>
                <div className="text-wrapper container">
                  <h1 className="hidden">Ouff</h1>
                  <h5 className="hidden">
                    Ouff delivers daily insults with genuine affection.
                  </h5>
                  <h5 className="hidden">
                    <span>Free</span> for your phone and tablet.
                    <div className="row">
                      <Link to="/ouff">
                        <p>Learn More</p>
                      </Link>
                    </div>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div id="apps" className="apps">
            <div className="container">
              <div class="row">
                {/* Loopar genom alla appar som ligger i allApps.js. Ändringar görs där. */}
                {Object.keys(this.state.allApps).map(key => (
                  <SingleApp
                    key={key}
                    index={key}
                    details={this.state.allApps[key]}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="disc-golf-section">
            <div className="container-custom">
              <div className="row">
                <div className="col-12 col-md-5 offset-md-1">
                  <div className="disc-golf-cta">
                    <h3>Spinn Disc Golf</h3>
                    <h5>
                      The new standard in Disc Golf scoring. Find and play
                      events, keep scores and track your performance with highly
                      detailed stats and more. Getting better is up to you, but
                      we think we can help.
                    </h5>
                    <a href="https://spinndiscgolf.com">
                      <p>Learn more</p>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div>
                    <a className="img-link" href="https://spinndiscgolf.com">
                      <img src={tjingScorecard} alt="Spinn Disc Golf" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section tyf">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h4>Already using our apps? Tell your friends!</h4>
                  <div className="tyf-social">
                    <a
                      href="https://twitter.com/intent/tweet?text=Less really is more. Focus on what you do best with the essential productivity apps by @wearekidpilot&url=http://www.wearekidpilot.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="45"
                        height="45"
                        viewBox="0 0 35 35"
                      >
                        <path
                          className="st0"
                          d="M15.033 24a9.293 9.293 0 0 1-5.031-1.474 6.585 6.585 0 0 0 4.859-1.359 3.286 3.286 0 0 1-3.066-2.279 3.301 3.301 0 0 0 1.482-.056 3.284 3.284 0 0 1-2.633-3.218v-.041a3.27 3.27 0 0 0 1.487.41 3.28 3.28 0 0 1-1.46-2.732c0-.601.162-1.165.444-1.65a9.317 9.317 0 0 0 6.764 3.429 3.282 3.282 0 0 1 5.593-2.994 6.563 6.563 0 0 0 2.084-.796 3.294 3.294 0 0 1-1.443 1.816 6.555 6.555 0 0 0 1.885-.517 6.665 6.665 0 0 1-1.638 1.699c.006.141.009.282.009.425.001 4.336-3.3 9.337-9.336 9.337"
                        />
                        <path
                          className="st0"
                          d="M17.5.875c9.167 0 16.625 7.458 16.625 16.625S26.667 34.125 17.5 34.125.875 26.667.875 17.5 8.333.875 17.5.875m0-.875C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0z"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/sharer/sharer.php?u=http%3A//www.wearekidpilot.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="45"
                        height="45"
                        viewBox="0 0 35 35"
                      >
                        <path
                          id="f_1_"
                          className="st0"
                          d="M18.661 25v-6.842h2.297l.344-2.667h-2.641v-1.702c0-.772.214-1.298 1.322-1.298l1.412-.001v-2.385A19.03 19.03 0 0 0 19.337 10c-2.036 0-3.43 1.243-3.43 3.525v1.966h-2.303v2.667h2.303V25h2.754z"
                        />
                        <path
                          className="st0"
                          d="M17.5.875c9.167 0 16.625 7.458 16.625 16.625S26.667 34.125 17.5 34.125.875 26.667.875 17.5 8.333.875 17.5.875m0-.875C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0z"
                        />
                      </svg>
                    </a>
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

export default IndexPage
