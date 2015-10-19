'use strict';

$(function () {
  //
  $('.js-text-toggle-link').on('click', function (event) {
    event.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).closest('.block-text-wrapper').css('max-height', '115px');
      $(this).removeClass('active').text('Подробнее >>');
    } else {
      $(this).addClass('active').text('Свернуть >>');
      $(this).closest('.block-text-wrapper').css('max-height', '500px');
    }
  });
});

