$(function() {

  $('.menu-wrap .toggler:checked ~ .menu').css('visibility', 'unset');

    $('.link').on('click', function() {
        $('.menu-wrap .toggler:checked ~ .menu').css('visibility', 'hidden');
      })
    
      $('.toggler').on('click', function() {
        $('.menu-wrap .toggler:checked ~ .menu').css('visibility', 'visible');
      })
});

