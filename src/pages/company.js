import React from 'react'
import $ from 'jquery';
import Helmet from 'react-helmet'

import companyHero from '../images/plane-hero.png'

import Header from '../components/header'
import Layout from '../components/layout'

class companyPage extends React.Component {  
  componentDidMount(){
    setTimeout(function(){
      $('h1.hidden, img.hero-image').removeClass('hidden');
    }, 300);

    setTimeout(function(){
      $('h5.hidden, h2.hidden, h6.hidden, h4.hidden, .apple-link.hidden').removeClass('hidden');
    }, 500);
    
    (function($){$.ajaxChimp={responses:{"We have sent you a confirmation email":0,"Please enter a value":1,"An email address must contain a single @":2,"The domain portion of the email address is invalid (the portion after the @: )":3,"The username portion of the email address is invalid (the portion before the @: )":4,"This email address looks fake or invalid. Please enter a real email address":5},translations:{en:null},init:function(selector,options){$(selector).ajaxChimp(options)}};$.fn.ajaxChimp=function(options){$(this).each(function(i,elem){var form=$(elem);var email=form.find("input[type=email]");var label=form.find("label[for="+email.attr("id")+"]");var settings=$.extend({url:form.attr("action"),language:"en"},options);var url=settings.url.replace("/post?","/post-json?").concat("&c=?");form.attr("novalidate","true");email.attr("name","EMAIL");form.submit(function(){var msg;function successCallback(resp){if(resp.result==="success"){msg="We have sent you a confirmation email";label.removeClass("error").addClass("valid");email.removeClass("error").addClass("valid")}else{email.removeClass("valid").addClass("error");label.removeClass("valid").addClass("error");var index=-1;try{var parts=resp.msg.split(" - ",2);if(parts[1]===undefined){msg=resp.msg}else{var i=parseInt(parts[0],10);if(i.toString()===parts[0]){index=parts[0];msg=parts[1]}else{index=-1;msg=resp.msg}}}catch(e){index=-1;msg=resp.msg}}if(settings.language!=="en"&&$.ajaxChimp.responses[msg]!==undefined&&$.ajaxChimp.translations&&$.ajaxChimp.translations[settings.language]&&$.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]){msg=$.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]}label.html(msg);label.show(2e3);if(settings.callback){settings.callback(resp)}}var data={};var dataArray=form.serializeArray();$.each(dataArray,function(index,item){data[item.name]=item.value});$.ajax({url:url,data:data,success:successCallback,dataType:"jsonp",error:function(resp,text){console.log("mailchimp ajax submit error: "+text)}});var submitMsg="Submitting...";if(settings.language!=="en"&&$.ajaxChimp.translations&&$.ajaxChimp.translations[settings.language]&&$.ajaxChimp.translations[settings.language]["submit"]){submitMsg=$.ajaxChimp.translations[settings.language]["submit"]}label.html(submitMsg).show(2e3);return false})});return this}})($);
    
    $('#mc-form').ajaxChimp({
      url: 'https://wearekidpilot.us13.list-manage.com/subscribe/post?u=ab1cde36fdda5421103c641ed&amp;id=9dbf30c533',
      callback: callbackFunction
    });
    
    function callbackFunction(resp) {
      $('.confirmation').removeClass('hidden');
        if (resp.result === 'success') {
          $('.confirmation-text').text('Nice! Welcome aboard.');
          $('.confirmation-extra').text('');
          $('#mc-email').val('');
        } else {
          $('.confirmation-text').text('Oops! Something went wrong, please try again!');
          $('.confirmation-extra').text('Tried more than once? Send us an email.');
        }
    }
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
             content: 'http://www.wearekidpilot.com/company' },
            { property: 'og:description', 
             content: 'We make great and efficient productivity apps for iPhone, iPad and Mac. We keep things simple to help you focus on what you do best. Less really is more.' },
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
                    <form id="mc-form">
                      <input id="mc-email" type="email" placeholder="Your email address" />
                      <button type="submit">Subscribe</button>
                    </form> 
                  </div>
                  <p>No span, no junk, just great content. Unsubscribe with one click.</p>
                  <div className="confirmation hidden">
                      <h5 className="confirmation-text"></h5>
                      <p className="confirmation-extra"></p>
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

export default companyPage
