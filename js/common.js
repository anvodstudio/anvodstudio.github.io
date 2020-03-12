$(function() {
  'use strict';

  var  headerContent = $('.header__content'),
      menuIcon = $('.menu-icon'),
      menuOverlay = $('.menu-overlay');


  /* =======================
  // Toggle Menu
  ======================= */
  $(menuIcon).click(function () {
    $(this).toggleClass('open');
    headerContent.toggleClass('is-active');
    menuOverlay.toggleClass('is-visible');
  });

  $(menuOverlay).click(function () {
    $(this).removeClass('is-visible');
    menuIcon.removeClass('open')
    headerContent.removeClass('is-active');
  });

  $(window).resize(function () {
    var windowWidth = $(this);
    if(windowWidth.width() >= 576) {
      menuIcon.removeClass('open')
      headerContent.removeClass('is-active');
      menuOverlay.removeClass('is-visible');
    }
  })


  /* =======================
  // Ajax Form
  ======================= */
  $("#ajaxForm").submit(function (e) {
    e.preventDefault();
    var action = $(this).attr("action");
    $.ajax({
      type: "POST",
      url: action,
      crossDomain: true,
      data: new FormData(this),
      dataType: "json",
      contentType: "multipart/form-data",
      processData: false,
      contentType: false,
      headers: {
        "Accept": "application/json"
      }
    }).done(function () {
      $('.form--success').addClass('is-active');
    }).fail(function () {
      $('.form--error').addClass('is-active');
    });
  });


  /* =================================
  // Images Fade In
  ================================= */
  $('.fadein').viewportChecker({
    classToAdd: 'inview',
    offset: 100,
    removeClassAfterAnimation: true
  });

});