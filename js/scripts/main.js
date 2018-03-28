$(function() {
  'use strict';

  // Preloader
  var overlay = $('#page-preloader');
  $(document).ready(function () {
    setTimeout(function () {
      overlay.addClass('is-done');
    }, 50);
  });

  // Menu
  $('.c-site-nav__icon').click(function(e) {
    e.preventDefault();
    // $('.c-full-page-container').toggleClass('open');
    $('.c-menu-list').toggleClass('open');
    $('.c-overlay').toggleClass('show');
  });

  $('#mask').click(function() {
    // $('.c-full-page-container').removeClass('open');
    $('.c-menu-list').removeClass('open');
    $('.c-overlay').removeClass('show');
  });

  $(window).on("resize", function() {
      var e = $(this);
      if (e.width() >= 991) {
        // $('.c-full-page-container').removeClass('open');
        $('.c-overlay').removeClass('show');
        $('.c-menu-list').removeClass('open');
      }
  });

  // Page Scroll
  // $('#about').on('click', function(e) {
  //   e.preventDefault();
  //   var servicesOffset = $('#js-services').offset().top;

  //   $('html, body').animate({
  //     scrollTop: servicesOffset
  //   }, 500);
  // });

  // Fixed header when scroll
  var heroHeight = $('#js-hero').innerHeight(),
    headerHeight = $('#js-header').innerHeight();

  $(document).on('scroll', function () {

    var documentScroll = $(this).scrollTop();

    if (documentScroll > (heroHeight / 2) + headerHeight) {

      $('#js-header').addClass('is-fixed o-opacity');
      $('.c-hero').css('paddingTop', headerHeight);

    } else {

      $('#js-header').removeClass('is-fixed o-opacity');
      $('.c-hero').removeAttr('style');

    };

  });

  // Smooth scroll to the pages block
  $('.c-menu-list li a').on('click', function(e) {
    e.preventDefault();

    if ($(window).width() <= 991) {
      $('.c-menu-list').removeClass('open');
      $('.c-overlay').removeClass('show');
    };

    var currentBlock = $(this).attr('href'),
        currentBlockOffset = $(currentBlock).offset().top;

    $('html, body').animate({
      scrollTop: currentBlockOffset - headerHeight
    }, 500);

  });

  // Freshchat
  window.fcWidget.init({
    token: "32afc133-968c-43dd-98d7-a612e412d004",
    host: "https://wchat.freshchat.com"
  });

});
