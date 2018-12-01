import React from 'react'
import { Link } from 'gatsby'
import $ from 'jquery';
import punchinHeroImg from '../images/punchin-hero.png'
import somethingIcon from '../images/something-icon.png'
import punchInMacIcon from '../images/punchin-mac-icon.png'
import tjingScorecard from '../images/tjing-scorecard.png'
import Header from '../components/header'
import Helmet from 'react-helmet'

import Layout from '../components/layout'



class IndexPage extends React.Component {
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
          title={"Kidpilot - Lovely productivity apps for iPhone, iPad and Mac"}
          meta={[
            { name: 'description', content: 'We make great and efficient productivity apps for iPhone, iPad and Mac. We keep things simple to help you focus on what you do best. Less really is more.' },
            { property: 'og:title', content: 'Kidpilot - Lovely productivity apps for iPhone, iPad and Mac' },
            { property: 'og:url', content: 'http://www.wearekidpilot.com/' },
            { property: 'og:description', content: 'We make great and efficient productivity apps for iPhone, iPad and Mac. We keep things simple to help you focus on what you do best. Less really is more.' },
          ]}
        >
          <html lang="en" />

        </Helmet>
        <div className="index">
          <Header />
          <div className="section jumbotron-custom">
           <div className="hero-bottom">
           <div className="hero-wrapper">
             <div className="row">
                <div className="col-4 offset-4">
                  <Link className="img-link" to="/punchin/ios">
                    <img className="hero-image hidden" src={punchinHeroImg} alt="Punch In Hero"/>
                  </Link>
                </div>
             </div>
             <div className="text-wrapper container">
                <h1 className="hidden">Punch In for iOSnus</h1>
                <h4 className="hidden">The friendly and efficient worktimer for Mac is now available for iPhone and iPad.</h4>
                  <h4 className="hidden">A single user time tracking app that does the job right.<div className="row">
                   <Link to="/punchin/ios">
                    <p>Learn More</p>
                  </Link>
                  </div>
                </h4>
              </div>
             </div>
               <div className="cta">
                <div className="clouds">
                </div>
               </div>
             </div>
          </div>
          <div id="apps" className="apps">
        <div className="container">
          <div className="row">
            <div className="app col-12 col-md-6">
              <div>
                <Link className="img-link" to="/something">
                <img src={somethingIcon} alt="Something Icon" />
              </Link>
              </div>
              <h3>
                Something
              </h3>
              <h6>
                <span>Free</span> for iPhone, iPad and iPod touch
              </h6>
              <h5>  
                Snap photos, draw sketches, write notes, record audio. Something automagically saves everything, all in one place. It´s refreshingly simple.
              </h5>
              <div className="buttons row">
                <div className="button">
                  <Link to="/something">
                    <p>Learn more</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="app col-12 col-md-6">
              <div>
                <Link className="img-link" to="/punchin/mac">
                  <img src={punchInMacIcon} alt="Punch In Mac" />
                </Link>
              </div>
              <h3>
                Punch In
              </h3>
              <h6>
                For Mac
              </h6>
              <h5>  
                Make time tracking less time consuming. Combine projects with clients, archive or delete projects, add/remove time, set hourly rate and more. 
              </h5>
              <div className="buttons row">
                <div className="button">
                  <Link to="/punchin/mac">
                    <p>Learn more</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="disc-golf-section">
        <div className="container-custom">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="disc-golf-cta">
                <h3>Tjing&reg;</h3>
                <h5>The new standard in Disc Golf scoring. Find and play events, keep scores and track your performance with highly detailed stats and more. Getting better is up to you, but we think we can help.</h5>
                <div className="row">
                  <a href="https://spinndiscgolf.com">
                    <p>Learn more</p>
                  </a>
                </div>

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
              <h4>
                Already using our apps? Tell your friends!
              </h4>
              <div className="tyf-social">
                <a href="https://twitter.com/intent/tweet?text=Less really is more. Focus on what you do best with the essential productivity apps by @wearekidpilot&url=http://www.wearekidpilot.com" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 35 35">
                    <path className="st0" d="M15.033 24a9.293 9.293 0 0 1-5.031-1.474 6.585 6.585 0 0 0 4.859-1.359 3.286 3.286 0 0 1-3.066-2.279 3.301 3.301 0 0 0 1.482-.056 3.284 3.284 0 0 1-2.633-3.218v-.041a3.27 3.27 0 0 0 1.487.41 3.28 3.28 0 0 1-1.46-2.732c0-.601.162-1.165.444-1.65a9.317 9.317 0 0 0 6.764 3.429 3.282 3.282 0 0 1 5.593-2.994 6.563 6.563 0 0 0 2.084-.796 3.294 3.294 0 0 1-1.443 1.816 6.555 6.555 0 0 0 1.885-.517 6.665 6.665 0 0 1-1.638 1.699c.006.141.009.282.009.425.001 4.336-3.3 9.337-9.336 9.337"/>
                    <path className="st0" d="M17.5.875c9.167 0 16.625 7.458 16.625 16.625S26.667 34.125 17.5 34.125.875 26.667.875 17.5 8.333.875 17.5.875m0-.875C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A//www.wearekidpilot.com" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 35 35">
                    <path id="f_1_" className="st0" d="M18.661 25v-6.842h2.297l.344-2.667h-2.641v-1.702c0-.772.214-1.298 1.322-1.298l1.412-.001v-2.385A19.03 19.03 0 0 0 19.337 10c-2.036 0-3.43 1.243-3.43 3.525v1.966h-2.303v2.667h2.303V25h2.754z"/>
                    <path className="st0" d="M17.5.875c9.167 0 16.625 7.458 16.625 16.625S26.667 34.125 17.5 34.125.875 26.667.875 17.5 8.333.875 17.5.875m0-.875C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0z"/>
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
