import React from 'react'
import $ from 'jquery';
import Helmet from 'react-helmet'

import ogImage from '../images/metaImg-index.jpg'
import companyHero from '../images/plane-hero.png'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import CustomForm from '../components/CustomForm'
import Header from '../components/header'
import Layout from '../components/layout'

const url = "https://wearekidpilot.us13.list-manage.com/subscribe/post?u=ab1cde36fdda5421103c641ed&amp;id=9dbf30c533";

class companyPage extends React.Component {  
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
          title={"About Kidpilot"}
          meta={[
            { name: 'description', 
             content: 'We make great and efficient productivity apps for iPhone, iPad and Mac. We keep things simple to help you focus on what you do best. Less really is more.' },
            { property: 'og:title', 
             content: 'About Kidpilot' },
            { property: 'og:url', 
             content: 'https://wearekidpilot.com/company' },
            { property: 'og:description', 
             content: 'We make great and efficient productivity apps for iPhone, iPad and Mac. We keep things simple to help you focus on what you do best. Less really is more.' },
            { property: 'og:image', content: `https://wearekidpilot.com${ogImage}` },
            { property: 'og:image:width', content: `1200` },
            { property: 'og:image:height', content: `628` },
          ]}
        >
          <html lang="en" />

        </Helmet>
        <div className="company">
          <Header />
          <div className="section jumbotron-custom">
            <div>
              <div className="cta">
                  <div className="clouds">
                  </div>
               </div>
               <div className="hero-wrapper">
                 <div className="text-wrapper">
                    <h1 className="hidden">Hi, we are Kidpilot</h1>
                    <h5 className="hidden">We create tools for mac, web and mobile that help you focus on what you do best and generally make your life easier.</h5>
                 </div>
                 <div className="row">
                    <div className="col-12">
                      <img className="hero-image hidden" src={companyHero} alt="" />
                    </div>
                 </div>
               </div>
               
             </div>
          </div>
          <div className="section cta-contact-us">
            <div className="row">
                 <div className="col-12">
                    <h3>Need help from us? We're here.</h3>
                    <h5>If you're having problems with one of our apps, have a project that needs some UX love, or just want to say hello, get in touch with us and we'll get back to you as soon as possible.</h5>
                    <a href="mailto:tower@wearekidpilot.com">
                      <p>Contact us</p>
                    </a>
                 </div>
               </div>
          </div>
          <div className="section newsletter">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h3>Get Kidpilot news delivered to your inbox</h3>
                  <div className="subscribe">
                  <MailchimpSubscribe
                    url={url}
                    render={({ subscribe, status, message }) => (
                      <CustomForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                      />
                    )}
                  />
                  </div>
                  <p>No spam, no junk, just great content. Unsubscribe with one click.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default companyPage
