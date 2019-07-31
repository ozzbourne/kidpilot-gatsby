import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import ogImage from '../images/metaImg-index.jpg'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import $ from 'jquery'

class NotFoundPage extends React.Component {
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
        <div className="notFoundPage">
          <div className="section jumbotron-custom">
            <div className="hero-bottom">
              <div className="hero-wrapper">
                <div className="text-wrapper container">
                  <h1 className="hidden">404</h1>
                  <h5 className="hidden">
                    Sorry, we can´t find what you are looking for.
                  </h5>
                  <h5 className="hidden">
                    <div className="row">
                      <Link to="/">
                        <p className="button">Return Home</p>
                      </Link>
                    </div>
                  </h5>
                </div>
              </div>
              <div className="cta">
                <div className="moon" />
                <div className="stars" />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default NotFoundPage
