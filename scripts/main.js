/* eslint-disable no-undef */
'use strict';

$(function() {
  $('.nav__item').on('click', function(e) {
    $('.nav__item').removeClass('active');

    const value = e.currentTarget.value;

    $(this).addClass('active');

    $('.slider')
      .css('transform', `translateX(-${value * $('.nav').width()}px)`);
  });
});
