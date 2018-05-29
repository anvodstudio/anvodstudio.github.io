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
    $('.c-menu-list').toggleClass('open');
    $('.c-overlay').toggleClass('show');
  });

  $('#mask').click(function() {
    $('.c-menu-list').removeClass('open');
    $('.c-overlay').removeClass('show');
  });

  $(window).on("resize", function() {
      var e = $(this);
      if (e.width() >= 991) {
        $('.c-overlay').removeClass('show');
        $('.c-menu-list').removeClass('open');
      }
  });

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

  // Scroll to contacts form
  $('.c-hero__desc .c-btn').on('click', function (e) {
    e.preventDefault();
    var servicesOffset = $('#js-contacts').offset().top - headerHeight;

    $('html, body').animate({
      scrollTop: servicesOffset
    }, 500);
  });

  // Netlify contact form
  $('.c-contacts-form').submit(function (e) {
    e.preventDefault();

    var $form = $(this);
    $.post($form.attr('action'), $form.serialize()).then(function () {
      $('.c-contacts-form :input').val('');
      $('.c-contacts-desc').text('Thanks for filling out our contact form. We try to get back to as you soon as possible.').css('color', '#5ec9c5');
    });
  });

  // Load works
  $(function () {
    $('.works-portfolio__item').slice(0, 2).show();
    $('.c-see-more').on('click', function (e) {
      e.preventDefault();

      let worksHeight = $('.works-portfolio__item').innerHeight();

      $('.works-portfolio__item:hidden').slice(0, 2).slideDown();

      if ($('.works-portfolio__item:hidden').length == 0) {
        $('.c-see-more').addClass('c-see-more--disabled');
        $('.c-see-more').off('click'); // Disable click event
      }

      $('html,body').animate({
        scrollTop: $(this).offset().top - (worksHeight + headerHeight * 2)
      }, 1000);
    });

  });

});
