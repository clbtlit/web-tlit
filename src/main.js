
$(document).ready(function(){
    $('.image-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        Infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1500,
        prevArrow:"<button type='button' class='slick-prev stick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next stick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
  });