/* global ymaps */
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

  $('.inner-page.catalog').on('click', '.show-more', function (event) {
    event.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).closest('.item-description').find('.full-description').removeClass('show');
      $(this).removeClass('active').find('span').text('>>');
    } else {
      $(this).closest('.item-description').find('.full-description').addClass('show');
      $(this).addClass('active').find('span').text('<<');
    }
  });

  function initMap() {
    var lat = $('#map-holder').data('lat');
    var lng = $('#map-holder').data('lng');

    var myMap = new ymaps.Map('map-holder', {
      center: [lat, lng],
      zoom: 15,
      controls: ['smallMapDefaultSet']
    });
    myMap.behaviors.disable(['scrollZoom', 'drag']);
    var myPlacemark = new ymaps.Placemark([lat, lng], {});
    myMap.geoObjects.add(myPlacemark);
  }

  ymaps.ready(function () {
    initMap();
  });

  $('.inner-page.catalog-single').on('click', '.show-on-map', function (event) {
    event.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).closest('.catalog-single').find('.map-holder').removeClass('show');
      $(this).removeClass('active').text('Показать на карте');
    } else {
      $(this).closest('.catalog-single').find('.map-holder').addClass('show');
      $(this).addClass('active').text('Скрыть карту');

      ymaps.ready(function () {
        initMap();
      });
    }
  });
});

