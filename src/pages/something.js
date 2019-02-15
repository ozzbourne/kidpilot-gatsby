import React from 'react'
import $ from 'jquery';
import Helmet from 'react-helmet'

import ogImage from '../images/metaImg-something.jpg'
import appStore from '../images/Download_on_the_App_Store_Badge_US-UK_135x40.svg'
import somethingHero from '../images/something-hero.png'
import cameraImage from '../images/camera@2x.png'
import notesImage from '../images/note2x.png'
import recordImage from '../images/record@2x.png'
import sketchImage from '../images/sketch2x.png'
import folderImage from '../images/folder2x.png'
import somethingUI from '../images/platforms-something.png'
import somethingIcon from '../images/something-icon.png'

import Header from '../components/header'
import Layout from '../components/layout'

class SomethingPage extends React.Component {
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
          title={"Something to catch everything"}
          meta={[
            { name: 'description', 
             content: "Snap photos, draw sketches, write notes, record audio. Something for iOS helps you catch and saves everything for you in one place. It's refreshingly simple" },
            { property: 'og:title', 
             content: 'Something to catch everything' },
            { property: 'og:url', 
             content: 'https://wearekidpilot.com/something' },
            { property: 'og:description', 
             content: "Snap photos, draw sketches, write notes, record audio. Something for iOS helps you catch and saves everything for you in one place. It's refreshingly simple" },
             { property: 'og:image', content: `https://wearekidpilot.com${ogImage}` },
             { property: 'og:image:width', content: `1200` },
             { property: 'og:image:height', content: `628` },
          ]}
        >
          <html lang="en" />

        </Helmet>
        <div class="something">
          <Header />
          <div className="section jumbotron-custom">
            <div className="container">
              <div className="row hero-wrapper">
                <div className="col-12 col-lg-7">
                  <div className="text-wrapper">
                    <h1 className="hidden">Something<br/> to catch everything</h1>
                    <h2 className="hidden">Catch groundbreaking ideas or everyday moments within seconds. Refreshingly simple.</h2>
                    <div className="apple-link hidden">
                      <h6><span>Free</span> for iPhone, iPad and iPod touch</h6>
                      <a target="_blank" rel="noopener noreferrer" href="http://appstore.com/somethingtocatcheverything">
                        <img className="store-link" src={appStore} alt="App Store"/>
                      </a>
                    </div>

                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <img className="hero-image hidden" src={somethingHero} alt="Something Hero" />
                </div>
              </div>
            </div>
          </div>
          <div className="section hiw">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h3 className="header-one">
                    Snap photos, draw sketches, write notes and record audio.
                    Everything is instantly saved in the Something library for easy access.
                  </h3>
                </div>
                <div className="col-12 col-md-3 icon">
                  <img src={cameraImage} alt=" " />
                  <h5>Capture any moment</h5>
                  <h6>On the fly, or well planned.</h6>
                </div>
                <div className="col-12 col-md-3 icon">
                  <img src={notesImage} alt=" " />
                  <h5>Jot something down</h5>
                  <h6>Ideas, to-do's or reminders.</h6>
                </div>
                <div className="col-12 col-md-3 icon">
                  <img src={recordImage} alt=" " />
                  <h5>Record any audio</h5>
                  <h6>Unlimited recording time.</h6>
                </div>
                <div className="col-12 col-md-3 icon">
                  <img src={sketchImage} alt=" " />
                  <h5>Sketch or scribble</h5>
                  <h6>A back-of-a-napkin idea.</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-3 icon">
                  <svg height="120" width="100%" className="d-none d-md-block">
                    <line className="svg-lines" x1="50%" y1="30" x2="50%" y2="94" />
                    <line className="svg-lines" x1="50%" y1="110" x2="100%" y2="110"/>
                    <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 2 120" width="100%" height="100%">
                      <rect className="svg-rect-l" id="background" width="18" height="18" fill="white" style={{transform: "translateY(94px)"}}/>
                      <path className="st0" d="M1,37.8C1,47.3,8.7,55,18.2,55"/>
                  </svg>
                      Sorry, your browser does not support inline SVG.
                  </svg>
                </div>
                <div className="col-12 col-md-3 icon">
                  <svg height="120" width="100%" className="d-none d-md-block">
                    <line x1="50%" y1="30" x2="50%" y2="94" className="svg-lines" />
                    <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 2 120" width="100%" height="100%">
                      <path className="st0" d="M1,37.8C1,47.3,8.7,55,18.2,55"/>
                    </svg>
                    <line x1="0%" y1="110" x2="100%" y2="110" className="svg-lines" />
                    Sorry, your browser does not support inline SVG.
                  </svg>
                </div>
                <div className="col-12 col-md-3 icon">
                  <svg height="120" width="100%" className="d-none d-md-block">
                    <line x1="50%" y1="30" x2="50%" y2="94" className="svg-lines" />
                    <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 35 120" width="100%" height="100%">
                      <path className="st0" d="M17.2,37.8C17.2,47.3,9.5,55,0,55"/>
                    </svg>
                    <line x1="0%" y1="110" x2="100%" y2="110" className="svg-lines" />
                    Sorry, your browser does not support inline SVG.
                  </svg>
                </div>
                <div className="col-12 col-md-3 icon">
                  <svg height="120" width="100%" className="d-none d-md-block">
                    <line x1="50%" y1="30" x2="50%" y2="111" className="svg-lines" />
                    <line x1="0%" y1="110" x2="50%" y2="110" className="svg-lines" />
                    <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 35 120" width="100%" height="100%">
                      <rect className="svg-rect-r" id="background" width="18" height="18" />
                      <path className="st0" d="M17.2,37.8C17.2,47.3,9.5,55,0,55"/>
                    </svg>
                    Sorry, your browser does not support inline SVG.
                  </svg>
                </div>
              </div> 
              <div className="row">
                <div className="col-12 folder">
                  <img src={folderImage} alt=" " />
                  <h5>Instantly saves everything</h5>
                  <h6>All in one place</h6>
                </div>
              </div> 
            </div>
            <div className="container">
              <div className="row">
              <div className="col-12">
                <img className="platforms-image" src={somethingUI} alt="Something UI" />
              </div>
            </div>
          </div>
          </div>
          <div className="section customer-reviews">
            <div className="container">
              <h3>
                What our customers have to say
              </h3>
                <h5>
                  “What a great app. Instantly capture scribble, text note, photo, or audio note. Interface is sleek and simple.”
                </h5>
                <p>
                  – John, Anaheim
                </p>
                <h5>
                  “Let's me do everything I need when I get an idea.”
                </h5>
                <p>
                  – johanbolander
                </p>
                <h5>
                  “Best free app!!”
                </h5>
                <p>
                  – Tekson
                </p>
                <h5>
                  “Really sleek app, all in one place!”
                </h5>
                <p>
                  – Bampete
                </p>
            </div>
          </div>
          <div className="section apps">
            <div className="container app">
              <div className="row">
                <div className="col-12 col-lg-6 offset-lg-3">
                  <a target="_blank" rel="noopener noreferrer" className="img-link" href="http://appstore.com/somethingtocatcheverything">
                    <img src={somethingIcon} alt="Something App" />
                  </a>
                  <h3>
                    Get Something
                  </h3>
                  <h6>
                    Catch everything within seconds.
                  </h6>
                </div>
              </div>  
              <div className="row">
                <a target="_blank" rel="noopener noreferrer" href="http://appstore.com/somethingtocatcheverything">
                  <img className="store-link" src={appStore} alt="App Store"/>
                </a>
              </div>
              <div className="row">
                <div className="col-12 release-notes release-notes-something">
                  <div className="mt-4">
                    <a href="https://blog.wearekidpilot.com/tagged/release-notes-something">Release notes</a>
                    <p>Requires iOS 10.3 or newer. Compatible with iPhone, iPad and iPod touch.</p>
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
