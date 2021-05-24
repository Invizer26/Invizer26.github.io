$(document).ready(function(){
      $('.speakers__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        nextArrow: $('#nextSpeaker'),
        prevArrow: $('#prevSpeaker'),

      });

      $('.photoGallery__slider').slick({
              infinite: true,
              slidesToShow: 4,
              slidesToScroll: 1,
              variableWidth: true,
              nextArrow: $('#nextPhoto'),
              prevArrow: $('#prevPhoto'),

            });
    });