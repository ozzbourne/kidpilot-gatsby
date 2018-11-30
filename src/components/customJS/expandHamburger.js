import $ from 'jquery';
export default function expandHamburger(){
  var position = 0;
  
  if(!$('html').hasClass('open')) {
    position = $(window).scrollTop();
  }
  
  $('.hamburger').toggleClass('open');
  if($('.hamburger').hasClass('open')) {
    $('.navigation').toggleClass('open');
    
    setTimeout(function() {
      $('.navigation').toggleClass('transition');
    }, 100);
    
    $('body').toggleClass('open');
    $('html').toggleClass('open');
    $('html, body').animate({ scrollTop: position }, 0);

  } else {
    position = $(window).scrollTop();
    $('.navigation').toggleClass('transition');
    $('body').toggleClass('open');
    $('html').toggleClass('open');
    $('html, body').animate({
      scrollTop: position
    }, 0);
    setTimeout(function() {
      $('.navigation').toggleClass('open');
    }, 300);
  }
};
