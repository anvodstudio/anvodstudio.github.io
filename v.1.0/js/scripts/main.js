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
    $('.c-full-page-container').toggleClass('open');
    $('.c-overlay').addClass('show');
  });

  $('#mask').click(function() {
    $('.c-full-page-container').removeClass('open');
    $('.c-overlay').removeClass('show');
  });

  $(window).on("resize", function() {
      var e = $(this);
      if (e.width() >= 991) {
        $('.c-full-page-container').removeClass('open');
        $('.c-overlay').removeClass('show');
      }
  });

});
